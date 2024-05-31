import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './composants/not-found/not-found.component';
import { LoginComponent } from './composants/login/login.component';
import { ListDepComponent } from './composants/list-dep/list-dep.component';
import { AddDepComponent } from './composants/add-dep/add-dep.component';
import { DetailsDepComponent } from './composants/details-dep/details-dep.component';

const routes: Routes = [
  {path:'list', component:ListDepComponent},
  {path:'addDepartement', component: AddDepComponent},
  {path:'detailsDep/:id', component: DetailsDepComponent},
  {path:'', component:LoginComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
