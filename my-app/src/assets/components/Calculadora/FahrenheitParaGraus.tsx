import { ICalculadora } from "./ICalculadora";



export default class FahrenheitParaGraus implements ICalculadora{
    calcularTemperatura(temperatura: number) {
        return (temperatura - 32) * (5/9);
    }

}

