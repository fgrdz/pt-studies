import Relogio from "../../atoms/Relogio/Relogio"
import Button from "../../atoms/button/button"
import style from './cronometer.module.scss'

const Cronometer = ()=>{
    return(
        <>
            <div className={style.cronometro}>
                <p className={style.titulo}>Escolha uma atividade e inicie o cronometo</p>
                <div className={style.relogioWrapper}>
                    <Relogio/>
                </div>
                <Button buttonName="Iniciar"/>
            </div>
        </>
    )
}

export default Cronometer