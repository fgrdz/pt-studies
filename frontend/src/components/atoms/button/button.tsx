import style from './style.module.scss'

interface ButtonProps{
 
    buttonName: string
}
const Button: React.FC<ButtonProps>= ({buttonName})=>{
    return(
        <>
            <button  className={style.botao}>{buttonName}</button>
        </>
    )
}

export default Button