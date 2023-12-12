import React from "react"
import style from './styles.module.scss'
import tipoTarefas from "../../interfaces"

interface propsLists extends tipoTarefas{
   
    selecionaTarefa: (tarefaSelecionada:tipoTarefas)=>void;}

const Lists: React.FC<propsLists> = ({tarefa,tempo, selecionado,completado,id, selecionaTarefa})=>{
    return(
        <>
            <ul>
                <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} onClick={()=>selecionaTarefa({
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                })}>
                    <h3>{tarefa}</h3>
                    <p>{tempo}</p>
                </li>
            </ul>
        </>
    )
}

export default Lists