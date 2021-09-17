import { Category } from './../../models/Category';
import { CategoriesService } from './categories.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  data: Category[] = [];
  statusRegistration: boolean = false;

  form!: FormGroup;

  id: number = 0;
  name: string = '';

  constructor(private _categoriesService: CategoriesService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.getData();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: [0],
      name: ['', Validators.required]
    });
  }

  clearForm() {
    this.form.reset({
      id: 0,
      name: ''
    });
  }

  setStatus() {
    this.statusRegistration = !this.statusRegistration;
  }

  getData() {
    this._categoriesService.get().subscribe(
      (data: Category[]) => {
        this.data = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  saveData() {
    if (this.form.value.id != 0) {
      this._categoriesService.put(new Category(this.form.value)).subscribe(
        (retorno: any) => {
          console.log(retorno);
        },
        (error: any) => {
          console.error(error);
          this.getData();
          this.clearForm();
          this.statusRegistration = false;
        }
      );
    } else {
      delete this.form.value.id;
      this._categoriesService.post(new Category(this.form.value)).subscribe(
        (retorno: any) => {
          console.log(retorno);
        },
        (error: any) => {
          console.error(error);
          this.getData();
          this.clearForm();
          this.statusRegistration = false;
        }
      );
    }
  }

  deleteData() {
    this._categoriesService.delete(this.form.value.id).subscribe(
      (retorno: any) => {
        console.log(retorno);
      },
      (error: any) => {
        console.error(error);
        this.getData();
        this.clearForm();
        this.statusRegistration = false;
      }
    );
  }

  getDataByClick(id: number) {
      this.statusRegistration = true!;
      this.id = this.data.find(el => el.id === id)?.id!;
      this.name = this.data.find(el => el.id === id)?.name!;
  }

  formIsValid(){
    return (this.name != '');
  }

}
