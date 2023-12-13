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
     function finalizarTarefa(){
        if(selecionado){
            setSelecionado(undefined)
            setTarefas(tarefasAnteriores =>tarefasAnteriores.map(tarefa =>{
                if (tarefa.id === selecionado.id){
                    return{
                        ...tarefa,
                        selecionado:false,
                        completado:true
                    }
                }
                return tarefa;
            }))
        }
     }
     function handleRemove(id:any){
        const novasTarefas = [...tarefas]
        const index = novasTarefas.findIndex((tarefa=> tarefa.id === id))
        novasTarefas.splice(index,1)
        setTarefas(novasTarefas)
     }
    return(
        <>
            <Forms setTarefas={setTarefas}/>
            <Aside tarefas={tarefas} selecionaTarefa={selecionaTarefa} handleRemove={handleRemove}/>
            <Cronometer  selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
           
        </>
    )
}

export default TaskContainer