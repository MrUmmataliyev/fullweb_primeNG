import { Component } from '@angular/core';
import { CrudServiceService, Message } from '../../services/crud-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss'
})
export class DeleteComponent {
  myId!:number;
  isDeleted:boolean=false;
  mes:Message={
    mes:"",
  }
  constructor(private crud:CrudServiceService){}

  deletes(myId:number){
    this.crud.delete(myId).subscribe({
      next:(data)=>{
        this.mes=data;
        this.isDeleted=true;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  delete(){
    this.deletes(this.myId);
  }
}
