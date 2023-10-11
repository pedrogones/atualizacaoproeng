import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SharedService } from 'src/app/shared.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from 'src/app/auth-service.service';
import { PacienteService } from 'src/app/pacienteService';
//import { MeuDialogComponent } from '../meu-dialog/meu-dialog.component'; // Certifique-se de usar o caminho correto

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nome!: string;
  idade!: string;
  email!: string;
  usuario!: string;
  senha!: string;
  alergico!: string;
  contato!: string;
  infoadd!: string;
  sintomas!: string;
  role: string = '';

  meuFormulario: any;
  formBuilder: any;
  alergicoSim = false;
  alergicoNao = false;
isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  const isSubmitted = form && form.submitted;
  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}
  constructor(private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private dialog: MatDialog,
    private pacienteservice: PacienteService,
    private authService: AuthService
  ) {
  }
  @ViewChild('menuButton')
  menuButton!: MatMenuTrigger;
  ngOnInit(): void { }
  openDialog(message: string) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: message,
    });

  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

 cadastrar(){
  //this.pacienteservice.cadastrarPaciente();
 }
//

  toggleAlergico(opcao: string) {
    if (opcao === 'Sim') {
      this.alergicoSim = true;
      this.alergicoNao = false;
    } else {
      this.alergicoSim = false;
      this.alergicoNao = true;
    }
  }

  redirectProntuario() {
    this.sharedService.redirectProntuario();
  }
  // Função para validar se o formulário está completo
  isValidForm(): boolean {
    // Verifique se todos os campos obrigatórios estão preenchidos
    console.log(this.usuario, this.senha, this.nome,
      this.idade,
      this.email)
    return (
      !!this.nome &&
      !!this.idade &&
      !!this.email &&
      !!this.usuario &&
      !!this.senha
    );
  }

  // Função para verificar se o usuário selecionou 'Paciente' ou 'Médico'
  tipoUsuario:any;
  medicoOUpaciente(): boolean {
    const pacienteRadio = document.getElementById('paciente') as HTMLInputElement;
    const medicoRadio = document.getElementById('medico') as HTMLInputElement;
    if(pacienteRadio.checked){
      this.tipoUsuario='paciente';
    }else{
      this.tipoUsuario='medico';
    }
    return pacienteRadio.checked || medicoRadio.checked;
  }

  // Função para lidar com o clique no botão de cadastro
  fazerCadastro(): void {
    if (this.isValidForm()) {
        this.authService.addUser(this.usuario, this.senha, this.nome,
          this.idade, this.email).subscribe(
            (response) => {
              console.log('Cadastro do paciente realizado com sucesso:', response);
              // Você pode redirecionar o usuário para outra página aqui, se necessário
            },
            (error) => {
              console.error('Erro ao cadastrar o paciente:', error);
              this.openDialog('Erro ao cadastrar o paciente');
            }
          );

          this.redirectLogin();
    } else {
      this.openDialog("Preencha todos os campos e selecione a opção 'Paciente' ou 'Médico'");
    }
  }

  redirectHome(): void {
    this.sharedService.redirectHome();
  }
  redirectLogin(): void {
    this.sharedService.redirectLogin();
  }
  toggleMenu(): void {
    this.menuButton.openMenu(); // Abre o menu ao clicar no ícone do menu
  }
  redirect(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }



}
