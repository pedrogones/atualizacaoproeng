import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.scss']
})
export class HomePacienteComponent implements OnInit{
  radioInicio!: HTMLInputElement; // Declare o tipo como HTMLInputElement ou null
  inicio: boolean = true;
  receita: boolean = false;
  prontuario: boolean = false;
  constructor(private sharedService: SharedService){

  }
  ngOnInit(): void {

  }

  onRadioChange(selectedOption: string) {
    // Quando um botão de rádio for alterado, desmarque os outros
    if (selectedOption === 'inicio') {
      this.receita = false;
      this.prontuario = false;
    } else if (selectedOption === 'receita') {
      this.inicio = false;
      this.prontuario = false;
    } else if (selectedOption === 'prontuario') {
      this.inicio = false;
      this.receita = false;
    }
  }

  redirectPerfilMedico(){
    this.sharedService.redirectPerfilMedico();
  }






}
