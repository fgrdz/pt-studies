import { useTranslation } from "react-i18next";
import Lists from "../../atoms/lists/lists"
import tipoTarefas from "../../interfaces";
import './style.scss'


interface AsideProps {
    tarefas: tipoTarefas[],
    selecionaTarefa: (tarefaSelecionada:tipoTarefas)=>void,
    handleRemove: (handleRemove:tipoTarefas)=>void;
    
}

const Aside: React.FC<AsideProps> = ({ tarefas,selecionaTarefa,handleRemove }) => {
    
    const {t}= useTranslation()

    return (
        <>
            <aside className="listaTarefas">
                <h2>{t('studies')}</h2>
                {Array.isArray(tarefas) && tarefas.map((tarefa, index) => (
                    <Lists
                        key={index}
                        tarefa={tarefa.tarefa}
                        tempo={tarefa.tempo}
                        selecionado={tarefa.selecionado}
                        completado={tarefa.completado}
                        id={tarefa.id}
                        selecionaTarefa={selecionaTarefa}
                        handleRemove={handleRemove}
                       
                    />
                ))}
            </aside>
        </>
    );
}

export default Aside;
