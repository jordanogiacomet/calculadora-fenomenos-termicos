import { useState } from 'react'
import Botao from '../Botao'
import style from '../Formulario/Formulario.module.scss'

export default function Formulario(){
    
    const [unidade, setUnidade] = useState('K')
    

    const unidades = ['K', 'C']



    return(
        <main>
            <form className={style.formulario}>
                <label htmlFor="Unidade">Digite a temperatura em {unidade}</label>
                <input type="number"/>
                <Botao name='C' onClick={() => setUnidade('C')} type="button"/>
                <Botao name='F' onClick={() => setUnidade('F')} type="button"/>
                <Botao name='K' onClick={() => setUnidade('K')} type="button"/>
            </form>
        </main>
    )
}