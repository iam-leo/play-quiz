import { Injectable } from '@angular/core';
import { Pregunta } from '../Models/Pregunta';
import { Respuesta } from '../Models/Respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;

  preguntas: Pregunta[] = [
    new Pregunta('¿Cuál es la capital de Canadá?', [
      new Respuesta('Vancouver', 0),
      new Respuesta('Buenos Aires', 0),
      new Respuesta('Toronto', 1),
      new Respuesta('Lima', 0)
    ]),
    new Pregunta('¿Cuántos Balones de Oro tiene Messi?', [
      new Respuesta('5', 0),
      new Respuesta('6', 0),
      new Respuesta('7', 0),
      new Respuesta('8', 1)
    ]),
    new Pregunta('¿Cómo se llama el Creador de ChatGPT?', [
      new Respuesta('Steve Jobs', 0),
      new Respuesta('Sam Altman', 1),
      new Respuesta('Satya Nadella', 0),
      new Respuesta('Lee Jae Yong', 0)
    ]),
  ]
  constructor() { }

  getPreguntas(): Pregunta[]{
    return this.preguntas.slice()
  }
}
