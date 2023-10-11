import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-verifica-medico',
  templateUrl: './verifica-medico.component.html',
  styleUrls: ['./verifica-medico.component.scss']
})
export class VerificaMedicoComponent implements OnInit{
 // vamos manter um codigo de acesso padrao
 codigoPadrao = 'acessarUfpb'
  codigo = '';
 ngOnInit(){

 }
 constructor(private sharedService: SharedService){

 }

 submit(){
  if(this.codigo == this.codigoPadrao){
    this.sharedService.redirectHomeMedico();
  }else{
    alert("Codigo invalido")
  }
 }


}
