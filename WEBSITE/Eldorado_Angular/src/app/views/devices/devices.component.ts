import { Category } from './../../models/Category';
import { CategoriesService } from './../categories/categories.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Device } from 'src/app/models/Device';
import { DevicesService } from './devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  data: Device[] = [];
  dataCategory: Category[] = [];
  statusRegistration: boolean = false;

  form!: FormGroup;

  id: number = 0;
  name: string = '';
  category: string = '';
  color: string = '';
  partNumber: number = 0;

  constructor(private _devicesService: DevicesService, private _categoriesService: CategoriesService, private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.getData();
    this.getCategories();
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      id: [0],
      category: ['', Validators.required],
      color: ['', Validators.required],
      partNumber: [0, Validators.required]
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
    this._devicesService.get().subscribe(
      (data: Device[]) => {
        this.data = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getCategories() {
    this._categoriesService.get().subscribe(
      (data: Category[]) => {
        this.dataCategory = data;
        console.log(this.dataCategory)
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  saveData() {
    if (this.form.value.id != 0) {
      this._devicesService.put(new Device(this.form.value)).subscribe(
        (retorno: any) => {
          console.log(retorno);
        },
        (error: any) => {
          console.error(error);
          this.getData();
          this.clearForm();
        }
      );
    } else {
      delete this.form.value.id;
      this._devicesService.post(new Device(this.form.value)).subscribe(
        (retorno: any) => {
          console.log(retorno);
        },
        (error: any) => {
          console.error(error);
          this.getData();
          this.clearForm();
        }
      );
    }
  }

  deleteData() {
    this._devicesService.delete(this.form.value.id).subscribe(
      (retorno: any) => {
        console.log(retorno);
      },
      (error: any) => {
        console.error(error);
        this.getData();
        this.clearForm();
      }
    );
  }

  getDataByClick(id: number) {
      this.statusRegistration = true!;
      this.id = this.data.find(el => el.id === id)?.id!;
      this.category = this.data.find(el => el.id === id)?.category!;
      this.color = this.data.find(el => el.id === id)?.color!;
      this.partNumber = this.data.find(el => el.id === id)?.partNumber!;
  }

  formIsValid(){
    return (this.category != '' && this.color != '' && String(this.partNumber) != '' && this.category != null && this.color != null && String(this.partNumber) != null);
  }
}
