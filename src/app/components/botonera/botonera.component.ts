import { Component } from '@angular/core';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent {
  btnTxt = 'Aceptar';

  constructor(public preguntaService: PreguntaService){ }

  siguiente(){
    switch(this.btnTxt){
      case 'Aceptar': {
        this.preguntaService.confirmedQuestion = true;
        this.btnTxt = 'Siguiente'
        break;
      }
    }
  }

}
