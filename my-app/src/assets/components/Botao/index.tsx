import { SetStateAction } from 'react'
import style from '../Botao/Botao.module.scss'


interface Props{
    name?:string | number,
    type?:  "button" | "submit" | "reset" | undefined,
    onClick?: ()=>void | (number | void) | number

    

}


export default function Botao(props : Props){
    
    return(
        <button type={props.type} onClick={props.onClick} className={style.botao}>
            {props.name}
        </button>
    )


}