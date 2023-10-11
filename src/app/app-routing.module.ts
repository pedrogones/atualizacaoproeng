import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { HomeComponent } from './views/home/home.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { VerificaMedicoComponent } from './verifica-medico/verifica-medico.component';
import { HomeMedicoComponent } from './home-medico/home-medico.component';
import { HomePacienteComponent } from './home-paciente/home-paciente.component';
import { MedicacoesComponent } from './views/medicacoes/medicacoes.component';
import { ViewPerfilmedicoComponent } from './view-perfilmedico/view-perfilmedico.component';


const routes: Routes = [
  //declaração da rotas, na rota raiz a gente abre o LoginCompponent
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'paciente', component: PacientesComponent},
  {path: 'entrarComoMedico', component: VerificaMedicoComponent},
  {path: 'homeMedico', component: HomeMedicoComponent},
  {path: 'homePaciente', component: HomePacienteComponent},
  {path: 'medicacoes', component: MedicacoesComponent},
  {path: 'homePaciente/perfilMedico', component: ViewPerfilmedicoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
