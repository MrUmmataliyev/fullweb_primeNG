import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user-model';
import { CrudServiceService } from '../../services/crud-service.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrl: './get-by-id.component.scss'
})
export class GetByIdComponent implements OnInit {
  myId!:number;
  user:UserModel={
    userId:"",
    fullName:"",
    email:"",
    role:""
    
  };
  constructor(private http:CrudServiceService){
    this.getByid();
  }


  ngOnInit(): void {
    this.getByid();

  }
  getByid(){
    this.http.getbyid(this.myId).subscribe({
      next:(data)=>{
        this.user=data
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

}
