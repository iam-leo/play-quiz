import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})
export class BotoneraComponent {
  btnTxt = 'Aceptar';

  constructor(public preguntaService: PreguntaService, private router: Router){ }

  siguiente(){
    switch(this.btnTxt){
      case 'Aceptar': {
        this.preguntaService.confirmedQuestion = true;
        this.btnTxt = 'Siguiente';

        if(this.preguntaService.indexPregunta === this.preguntaService.preguntas.length - 1){
          this.btnTxt = 'Finalizar';
        }
        break;
      }

      case 'Siguiente': {
        this.preguntaService.indexPregunta++;
        this.preguntaService.respuestasUsuarios.push(this.preguntaService.indexRespuesta);
        this.preguntaService.disabledBtn = true;
        this.preguntaService.confirmedQuestion = false;
        this.btnTxt = 'Aceptar';
        break;
      }

      case 'Finalizar': {
        this.preguntaService.respuestasUsuarios.push(this.preguntaService.indexRespuesta);
        this.router.navigate(['/respuesta']);
      }
    }
  }

}
