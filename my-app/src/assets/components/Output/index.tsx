import { useEffect, useRef, useState } from "react";
import Botao from "../Botao";
import GrausParaKelvin from "../Calculadora/GrausParaKelvin";
import style from '../Output/Output.module.scss'
import GrausParaFanthet from "../Calculadora/GrausParaFanheith";

export default function Output(props:{name:string, temperatura:number}){
    const [kelvin, setKelvin] = useState(0)
    const [fahrenheit, setFahrenheit] = useState(0)

    //setKelvin(tempKelvin.calcularTemperatura(Number(e.target.value)))}


    let tempKelvin = new GrausParaKelvin

    let tempFanheith = new GrausParaFanthet


    





    return(
        <div className={style.output}>
             <input type="number" onChange={(e) => {setKelvin(tempKelvin.calcularTemperatura(Number(e.target.value))); setFahrenheit(tempFanheith.calcularTemperatura(Number(e.target.value)))}} required pattern="[0-9]*[.,][0-9]*" />
              

              <p>Temperatura em Kelvin</p>
             <h4>{kelvin}</h4>
             <p>Temperatura em Fahrenheit</p>
             <h4>{fahrenheit}</h4>
        </div>
        
        )


}