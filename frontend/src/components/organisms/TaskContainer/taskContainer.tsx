import tipoTarefas from "../../interfaces";
import Aside from "../../molecules/Aside/aside"
import Cronometer from "../../molecules/Cronometer/cronometer";
import Forms from "../../molecules/Forms/forms"
import react, {useState} from 'react'

interface arrayTarefas{
    tarefas: Array<{
        tarefa: string;
        tempo: string;
        selecionado:boolean;
        completado:boolean;
        id:string;
      }>;
}

const TaskContainer = ()=>{
    const [tarefas, setTarefas] = useState([{
        tarefa: 'Example',
          tempo: '02:00',
          selecionado: false,
          completado: false,
          id: ''
      }] )
     const [ selecionado, setSelecionado] = useState<tipoTarefas>();

     function selecionaTarefa(tarefaSelecionada: tipoTarefas){
            setSelecionado(tarefaSelecionada);
            setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa=>({
                ...tarefa,
                selecionado:tarefa.id === tarefaSelecionada.id ? true : false
            })));
     }
    return(
        <>
            <Forms setTarefas={setTarefas}/>
            <Aside tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
            <Cronometer selecionado={selecionado}/>
            {selecionado?.tempo}
        </>
    )
}

export default TaskContainer