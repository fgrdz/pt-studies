import Lists from "../../atoms/lists/lists"
import './style.scss'

interface asideProps{
    tarefas: Array<{
        tarefa: string;
        tempo: string;
        selecionado:boolean;
        completado:boolean;
        id:string;
      }>;
}
const Aside: React.FC<asideProps> = ({tarefas})=>{
    console.log(tarefas)
    return(
        <>
        <aside className="listaTarefas">
            <h2 >Estudos do dia:</h2>
            {Array.isArray(tarefas)&&tarefas.map((tarefa, index) => (
                <Lists key={index} title={tarefa.tarefa} duracao={tarefa.tempo}/>
            ))}
        </aside>
        </>
    )
}
export default Aside