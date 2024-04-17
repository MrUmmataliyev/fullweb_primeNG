import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallComponent } from './components/getall/getall.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { GetByIdComponent } from './components/get-by-id/get-by-id.component';
import { DeleteComponent } from './components/delete/delete.component';

const routes: Routes = [
  {path:"", component:GetallComponent},
  {path:"getall", component:GetallComponent},
  {path:"create", component:CreateComponent},
  {path:"update", component:UpdateComponent},
  {path:"getbyid", component:GetByIdComponent},
  {path:"delete", component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
