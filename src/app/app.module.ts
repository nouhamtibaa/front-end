import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SujetListComponent } from './sujet-list/sujet-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EtudiantService } from './etudiant.service';
import { DetailsSujetComponent } from './details-sujet/details-sujet.component';
import { LoginComponent } from './login/login.component';
import { CreateEtudiantComponent } from './create-etudiant/create-etudiant.component';
import { ListSujetAdminComponent } from './list-sujet-admin/list-sujet-admin.component';
import { EtudiantSujetComponent } from './etudiant-sujet/etudiant-sujet.component';
import { TestCVComponent } from './test-cv/test-cv.component';
import { CreateSujetComponent } from './create-sujet/create-sujet.component';
import { UpdateSujetComponent } from './update-sujet/update-sujet.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';

import {MatDialogModule} from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyDialog2Component } from './my-dialog2/my-dialog2.component';
import { MyDialog3Component } from './my-dialog3/my-dialog3.component';
import { RecapComponent } from './recap/recap.component';


@NgModule({
  declarations: [
    AppComponent,
    SujetListComponent,
    DetailsSujetComponent,
    LoginComponent,
    CreateEtudiantComponent,
    ListSujetAdminComponent,
    EtudiantSujetComponent,
    TestCVComponent,
    CreateSujetComponent,
    UpdateSujetComponent,
    SendEmailComponent,
    LoginAdminComponent,
    MyDialogComponent,
    MyDialog2Component,
    MyDialog3Component,
    RecapComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [
 MyDialogComponent, MyDialog2Component, CreateEtudiantComponent, CreateSujetComponent, MyDialog2Component
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
