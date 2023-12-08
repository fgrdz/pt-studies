import React, { useState, SetStateAction } from 'react';
import Button from "../../atoms/button/button"
import Input from "../../atoms/input/input"
import Label from "../../atoms/label/label"
import style from './style.module.scss'
import {v4 as uuidv4} from 'uuid'

interface formsProps{
    setTarefas: React.Dispatch<SetStateAction<{ tarefa: string; tempo: string; selecionado: boolean, completado:boolean, id:string }[]>>;
}
const Forms: React.FC<formsProps> = ({setTarefas})=>{
    function handleSubmit(e:any){
        e.preventDefault();
        const tarefa = e.currentTarget.tarefa.value;
        const time = e.currentTarget.time.value;

    
        setTarefas((prevTarefas) => [
        ...prevTarefas,
        { tarefa: tarefa, tempo: time, selecionado:false,completado:false, id: uuidv4() }
        ]);
        
        e.currentTarget.reset();
     }
    return(
        <>
            <form onSubmit={handleSubmit} className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <Label
                        name="Tarefa"
                        HtmlFor="tarefa"
                    />
                    <Input
                        
                        type="text"
                        name="tarefa"
                        id= "tarefa"
                        
                        placeholder="O que você quer estudar?"
                    />
                </div>
                <div className={style.inputContainer}>
                    <Label
                        name="Time"
                        HtmlFor="time"
                    />
                    <Input
                        
                        type="time"
                        name="time"
                        id= "time"
                        placeholder=""
                    
                    />
                </div>
                <Button  buttonName="Adicionar"/>
            </form>
        </>
    )
}

export default Forms