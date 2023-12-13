import style from './style.module.scss'

interface ButtonProps{
 
    buttonName: string,
    onClick?: ()=> void
}
const Button: React.FC<ButtonProps>= ({buttonName, onClick})=>{
    return(
        <>
            <button onClick={onClick}  className={style.botao}>{buttonName}</button>
        </>
    )
}

export default Button