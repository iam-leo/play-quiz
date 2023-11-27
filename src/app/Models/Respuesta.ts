export class Respuesta {
    name: string;
    isCorrect: number;

    constructor(name: string, isCorrect: number){
        this.name = name;
        this.isCorrect = isCorrect;
    }
}