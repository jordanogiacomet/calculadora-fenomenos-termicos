import { ICalculadora } from "./ICalculadora";



export default class GrausParaFanthet implements ICalculadora{
    calcularTemperatura(temperatura: number) {
        return (temperatura * (9/5)) + 32;
    }

}

