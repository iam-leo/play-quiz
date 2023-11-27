import { Respuesta } from "./Respuesta";

export class Pregunta {
    description: string;
    answers: Respuesta[];

    constructor(description: string, answers: Respuesta[]){
        this.description = description;
        this.answers = answers;
    }
}