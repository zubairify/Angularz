import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'add', component: AddComponent},
  {path: 'list', component: ListComponent},
  {path: 'edit', component: EditComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
