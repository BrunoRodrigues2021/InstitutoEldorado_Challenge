import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/app/models/Device';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  baseUrl = environment.baseApiUrl + '/devices';

  constructor(private http: HttpClient) { }

  get(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl);
  }

  post(data: Device) {
    return this.http.post(this.baseUrl, data);
  }

  put(data: Device): Observable<Device[]> {
    console.log(data)
    return this.http.put<Device[]>(this.baseUrl, data);
  }

  delete(id: number) {
    return this.http.delete(this.baseUrl + `/${id}`);
  }
}
