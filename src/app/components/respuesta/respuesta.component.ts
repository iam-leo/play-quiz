import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/Models/Pregunta';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  listPreguntas: Pregunta[] = [];
  respuestasUser: any;

  constructor(private preguntaService: PreguntaService, private router: Router){ }

  ngOnInit(): void {
    this.listPreguntas = this.preguntaService.preguntas;
    this.respuestasUser = this.preguntaService.respuestasUsuarios;
  }

  regresar(){
    this.preguntaService.respuestasUsuarios = [];
    this.router.navigate(['/'])
  }
}
