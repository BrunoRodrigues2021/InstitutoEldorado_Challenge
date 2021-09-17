import { environment } from './../../../environments/environment.prod';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = environment.baseApiUrl + '/categories';

  constructor(private http: HttpClient) { }

  get(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  post(data: Category) {
    return this.http.post(this.baseUrl, data);
  }

  put(data: Category): Observable<Category[]> {
    return this.http.put<Category[]>(this.baseUrl, data);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }

}
