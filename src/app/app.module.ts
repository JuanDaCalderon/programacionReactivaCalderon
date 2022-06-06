import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { MaterialModule } from './modules/material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderToolbarComponent } from './components/header-toolbar/header-toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { ClasesComponent } from './components/clases/clases.component';
import { NameOutputPipe } from './pipes/name-output.pipe';
import { HeadersTitlesDirective } from './directives/headers-titles.directive';
import { AddAlumnoModalComponent } from './components/add-alumno-modal/add-alumno-modal.component';
import { EditAlumnoModalComponent } from './components/edit-alumno-modal/edit-alumno-modal.component';
import { DeleteAlumnoModalComponent } from './components/delete-alumno-modal/delete-alumno-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderToolbarComponent,
    MenuComponent,
    AlumnosComponent,
    CursosComponent,
    ClasesComponent,
    NameOutputPipe,
    HeadersTitlesDirective,
    AddAlumnoModalComponent,
    EditAlumnoModalComponent,
    DeleteAlumnoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
