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
  }

  getPregunta(){
    return this.listPregunta[this.preguntaService.indexPregunta].description;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRta: number){
    if(this.preguntaService.confirmedQuestion){
      return;
    }

    this.preguntaService.selectedOption = respuesta;
    this.preguntaService.disabledBtn = false;
    this.preguntaService.indexRespuesta = indexRta;
  }

  addClassOption(respuesta: Respuesta): any{
    // Respuesta seleccionada y no confirmada
    if(respuesta === this.preguntaService.selectedOption && !this.preguntaService.confirmedQuestion){
      return 'bg-yellow-400 border-yellow-500 hover:bg-yellow-400 hover:border-yellow-500'
    }

    // Respuesta correcta y confirmada
    if(respuesta === this.preguntaService.selectedOption && this.preguntaService.confirmedQuestion && this.preguntaService.selectedOption.isCorrect === 1){
      return 'bg-green-500 border-green-600 hover:bg-green-500 hover:border-green-600'
    }

    // Respuesta incorrecta y confirmada
    if(respuesta === this.preguntaService.selectedOption && this.preguntaService.confirmedQuestion && this.preguntaService.selectedOption.isCorrect === 0){
      return 'bg-red-600 border-red-700 hover:text-white hover:bg-red-600 hover:border-red-700'
    }
  }

  selectedAnswer($event: any){
    // Obtenemos todos los li y le quitamos el text-white
    const optionsAnswer = document.querySelectorAll('li');
    const btnTxt = document.querySelector('button')?.textContent;
    optionsAnswer.forEach(opt => {
      opt.classList.add('text-white');

      if(btnTxt !== 'Siguiente' && opt.textContent !== $event.target.textContent){
        opt.classList.add('text-white');
      } else if(btnTxt !== 'Siguiente' && btnTxt !== 'Finalizar' && !this.preguntaService.confirmedQuestion){
        console.log('Agregando texto negro')
        $event.target.classList.add('text-black');
      } else{
        return
      }
    })

    // Agregamos clases al Li seleccionado
    if(btnTxt !== 'Siguiente' && btnTxt !== 'Finalizar'){
      $event.target.classList.remove('text-white');
    }
  }

  confirmAnswer($event: any){
    const txtBtn = $event.target.textContent
    const optionsAnswer = document.querySelectorAll('li');

    if(txtBtn === 'Siguiente' || txtBtn === 'Finalizar'){
      optionsAnswer.forEach(opt => {
        opt.classList.add('text-white');
        opt.classList.remove('cursor-pointer', 'hover:bg-yellow-400', 'hover:text-black', 'hover:border-yellow-500', 'hover:border-red-700', 'hover:border-green-600');
      });
    }
  }

  iconCorrect(respuesta: Respuesta): boolean{
    if(respuesta === this.preguntaService.selectedOption && this.preguntaService.confirmedQuestion && this.preguntaService.selectedOption.isCorrect === 1){
      return true;
    }else{
      return false;
    }
  }

  iconIncorrect(respuesta: Respuesta): boolean{
    if(respuesta === this.preguntaService.selectedOption && this.preguntaService.confirmedQuestion && this.preguntaService.selectedOption.isCorrect === 0){
      return true;
    }else{
      return false;
    }
  }
}
