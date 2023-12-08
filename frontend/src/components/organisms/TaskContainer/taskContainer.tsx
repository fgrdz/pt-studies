import Aside from "../../molecules/Aside/aside"
import Forms from "../../molecules/Forms/forms"
import react, {useState} from 'react'
const TaskContainer = ()=>{
    const [tarefas, setTarefas] = useState([{
        tarefa: 'Example',
          tempo: '02:00',
          selecionado: false,
          completado: false,
          id: ''
      }] )
     
    return(
        <>
            <Forms setTarefas={setTarefas}/>
            <Aside tarefas={tarefas}/>
        </>
    )
}

export default TaskContainer