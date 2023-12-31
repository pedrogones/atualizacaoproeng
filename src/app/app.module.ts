import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { HomeMedicoComponent } from './home-medico/home-medico.component';
import { HomePacienteComponent } from './home-paciente/home-paciente.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { ProntuarioComponent } from './prontuario/prontuario.component';
import { VerificaMedicoComponent } from './verifica-medico/verifica-medico.component';
import { ViewPerfilmedicoComponent } from './view-perfilmedico/view-perfilmedico.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MedicacoesComponent } from './views/medicacoes/medicacoes.component';
import { ProntuarioMedicoComponent } from './prontuario-medico/prontuario-medico.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    ConfirmationDialogComponent,
    PacientesComponent,
    ProntuarioComponent,
    VerificaMedicoComponent,
    HomeMedicoComponent,
    HomePacienteComponent,
    MedicacoesComponent,
    ViewPerfilmedicoComponent,
    ProntuarioMedicoComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatListModule,
    MatRadioModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
