import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEditComponent } from './list-edit/list-edit.component';
import { ListComponent } from './list/list.component';
import { ListStartComponent } from './list-start/list-start.component';

const routes: Routes = [
  {path: '', component: ListComponent, children: [
    {path: '', component: ListStartComponent},
    {path: 'new', component: ListEditComponent},
    {path: ':id/edit', component: ListEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
