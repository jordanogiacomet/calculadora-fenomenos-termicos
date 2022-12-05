import { useEffect, useRef, useState } from "react";
import Botao from "../Botao";
import GrausParaKelvin from "../Calculadora/GrausParaKelvin";
import style from '../Output/Output.module.scss'

export default function Output(props:{name:string, temperatura:number}){
    const [state, setState] = useState(0)


    let oldState = useRef(state);

    let temp = new GrausParaKelvin



    return(
        <div className={style.output}>
             <input type="number" onChange={e => setState(temp.calcularTemperatura(Number(e.target.value)))} required pattern="[0-9]*[.,][0-9]*" />
             <h4>{state}</h4>
        </div>
        
        )


}