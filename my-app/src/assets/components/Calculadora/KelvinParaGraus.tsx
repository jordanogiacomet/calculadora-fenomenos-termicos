import { ICalculadora } from "./ICalculadora";



export default class KelvinParaGraus implements ICalculadora{
    calcularTemperatura(temperatura: number) {
        return  temperatura - 273;
    }

}

