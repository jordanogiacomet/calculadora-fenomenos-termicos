import { ICalculadora } from "./ICalculadora";



export default class FahrenheitParaKelvin implements ICalculadora{
    calcularTemperatura(temperatura: number) {
        return (temperatura - 32) * (5/9) + 273.15;
    }

}

