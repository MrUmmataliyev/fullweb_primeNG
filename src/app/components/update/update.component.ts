import { Component } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { CreateUser } from '../../models/create-user';
import { CrudServiceService, Message } from '../../services/crud-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  myId!:number;
  isUpdated:boolean=false;
  user:UserModel={
  userId:"",
  fullName:"",
  email:"",
  role:""
  
  };
  message:Message={
    mes:""
  }
  setValue: CreateUser={
    fullName:"",
    email:"",
    login:"64554545454456",
    password:"4565464545654654dfsa",
    role:""
  };
  constructor(private crud:CrudServiceService){}
  getById(){
    this.crud.getbyid(this.myId).subscribe({
      next: (data)=> {
          this.user = data
      },
      error: (err)=>{
        console.log(err)
      }
    })
  }
  
  setUser(){
    this.crud.update(this.myId, this.setValue).subscribe({
      next: (data)=>{
        this.message=data;
        this.isUpdated=true;
      }
    })
  }
}
