import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/Models/Pregunta';
import { Respuesta } from 'src/app/Models/Respuesta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPregunta: Pregunta[] = [];

  constructor(public preguntaService: PreguntaService){ }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
    console.log(this.listPregunta)
  }

  getPregunta(){
    return this.listPregunta[this.preguntaService.indexPregunta].description;
  }

  respuestaSeleccionada(respuesta: Respuesta){
    this.preguntaService.selectedOption = respuesta;
    this.preguntaService.disabledBtn = false;
  }

  addClassOption(respuesta: Respuesta): any{
    if(respuesta === this.preguntaService.selectedOption){
      return 'bg-yellow-400 border-yellow-500 text-black hover:bg-yellow-400 hover:border-yellow-500'
    }else{
      return
    }
  }
}
