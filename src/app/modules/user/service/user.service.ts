import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {api} from '../../../config/api';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  addUser(data: any): Observable<any> {
    return this.httpClient.post(api.addUser, data);
  }

  updateUser(id: number, data: any): Observable<any> {
    return this.httpClient.put(api.updateUser + id, data);
  }

  getUsersList(): Observable<any> {
    return this.httpClient.get(api.listUsers);
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(api.removeUser + id);
  }
}
