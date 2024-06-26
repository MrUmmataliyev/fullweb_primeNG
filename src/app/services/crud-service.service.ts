import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user-model';
import { CreateUser } from '../models/create-user';
export interface Message {
  mes:string,
  
}
@Injectable({
  providedIn: 'root'
})

export class CrudServiceService {
  baseUrl: string = "http://localhost:5025/api/User/";
  constructor(private http:HttpClient) { }

  
  getAll(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.baseUrl+'GetAll')
  }
  create(data:CreateUser): Observable<Message>{
    return this.http.post<Message>(this.baseUrl+'CreateUser', data)
  }
  getbyid(id:number): Observable<UserModel>{
    return this.http.get<UserModel>(this.baseUrl+`GetByUserId?id=${id}`);
  }
  update(id:number, data:CreateUser): Observable<Message>{
    return this.http.put<Message>(this.baseUrl+`UpdateUser?id=${id}`,data)
  }
  delete(id:number): Observable<Message>{
    return this.http.delete<Message>(this.baseUrl+`DeleteUser?id=${id}`)
  }
}
