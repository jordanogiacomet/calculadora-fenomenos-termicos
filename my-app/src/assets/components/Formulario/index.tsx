import { useState } from 'react'
import Botao from '../Botao'
import style from '../Formulario/Formulario.module.scss'
import Output from '../Output'

export default function Formulario(){
    
    const [unidade, setUnidade] = useState('C')


    
    
    return(
        <main>
            <form className={style.formulario}>
                <label htmlFor="Unidade">Digite a temperatura em {unidade}</label>
                <Output name='C' temperatura={25}/>
         
            </form>
        </main>
    )
}