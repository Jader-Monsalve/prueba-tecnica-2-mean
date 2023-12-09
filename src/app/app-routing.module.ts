import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateNotesComponent } from './create-notes/create-notes.component';

const routes: Routes = [
  {path: '', component: AppComponent },
  {path: 'usuarios', component: CreateUserComponent},
  {path: 'notas', component: CreateNotesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
