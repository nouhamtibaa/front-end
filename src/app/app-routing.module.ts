import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailsSujetComponent} from './details-sujet/details-sujet.component';
import {SujetListComponent} from './sujet-list/sujet-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth-guard.service';
import {CreateEtudiantComponent} from './create-etudiant/create-etudiant.component';
import {ListSujetAdminComponent} from './list-sujet-admin/list-sujet-admin.component';
import {EtudiantSujetComponent} from './etudiant-sujet/etudiant-sujet.component';
import {TestCVComponent} from './test-cv/test-cv.component';
import {CreateSujetComponent} from './create-sujet/create-sujet.component';
import {UpdateSujetComponent} from './update-sujet/update-sujet.component';
import {SendEmailComponent} from './send-email/send-email.component';
import {LoginAdminComponent} from './login-admin/login-admin.component';
import {AuthAdminService} from './auth-admin.service';
import {MyDialogComponent} from './my-dialog/my-dialog.component';




const routes: Routes = [
  { path: '',  component: SujetListComponent },
  { path: 'sujet',  component: SujetListComponent },
  { path: 'details/:id', component: DetailsSujetComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'createAccount', component: CreateEtudiantComponent},
  { path: 'listSujetAdmin', component: ListSujetAdminComponent,  canActivate: [AuthAdminService]},
  { path: 'listEtudiantSujetAdmin', component: EtudiantSujetComponent},
  { path: 'etudiant/:id', component: EtudiantSujetComponent},
  { path: 'testCV/:id', component: TestCVComponent},
  { path: 'addSujet', component: CreateSujetComponent},
  { path: 'update/:id', component: UpdateSujetComponent},
  { path: 'sendEmail/:id', component: SendEmailComponent},
  { path: 'loginAdmin', component: LoginAdminComponent},
  { path: 'myDialog', component: MyDialogComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
