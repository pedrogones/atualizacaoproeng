import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home-medico',
  templateUrl: './home-medico.component.html',
  styleUrls: ['./home-medico.component.scss']
})
export class HomeMedicoComponent {

  constructor(private sharedService: SharedService){

  }


  redirectPront(){
    this.sharedService.redirectProntuario1();
  }

}
