import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/Models/Pregunta';
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
}
