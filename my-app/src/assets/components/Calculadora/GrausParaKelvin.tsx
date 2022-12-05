import { ICalculadora } from "./ICalculadora";



export default class GrausParaKelvin implements ICalculadora{
 
    calcularTemperatura(temperatura: number) {
        return temperatura + 273;
    }

}

