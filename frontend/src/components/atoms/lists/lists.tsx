import React from "react"
import style from './styles.module.scss'
import tipoTarefas from "../../interfaces"

interface propsLists extends tipoTarefas{
    key: number,
    selecionaTarefa: (tarefaSelecionada:tipoTarefas)=>void;
    handleRemove: (handleRemove:any)=>void;
}

const Lists: React.FC<propsLists> = ({key, tarefa,tempo, selecionado,completado,id, selecionaTarefa, handleRemove})=>{

    return(
        <>
            <ul>
                <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado? style.itemCompletado : ''}`} >
                    <h3>{tarefa}</h3>
                    <p>{tempo}</p>
                    <a className={`{style.item} &{style.a}` } onClick={()=>handleRemove(id)} >Excluir</a>
                    <a className={`{style.item} &{style.a}` } onClick={()=>!completado && selecionaTarefa({
                        tarefa,
                        tempo,
                        selecionado,
                        completado,
                        id
                    })} 
                >Selecionar</a>
                    {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
                </li>
            </ul>
            
        </>
    )
}

export default Lists