import React from 'react';
import style from './relogio.module.scss';

interface PropsRelogio {
  tempo: number | undefined;
}

const Relogio: React.FC<PropsRelogio> = ({ tempo = 0 }) => {
  const horas = Math.floor(tempo / 3600);
  const minutos = Math.floor((tempo % 3600) / 60);
  const segundos = tempo % 60;

  const [horaDezena, horaUnidade] = String(horas).padStart(2, '0').split('');
  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0').split('');
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0').split('');

  return (
    <>
      <span className={style.relogioNumero}>{horaDezena}</span>
      <span className={style.relogioNumero}>{horaUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  );
};

export default Relogio;
