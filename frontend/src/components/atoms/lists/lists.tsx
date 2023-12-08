import React from "react"
import style from './styles.module.scss'

interface ListsProps{
    title: string,
    duracao: string;
}
const Lists: React.FC<ListsProps> = ({title,duracao})=>{
    return(
        <>
            <ul>
                <li className={style.item}>
                    <h3>{title}</h3>
                    <p>{duracao}</p>
                </li>
            </ul>
        </>
    )
}

export default Lists