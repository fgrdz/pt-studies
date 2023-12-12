import React, { useEffect, useState } from 'react';
import Relogio from '../../atoms/Relogio/Relogio';
import Button from '../../atoms/button/button';
import tipoTarefas from '../../interfaces';
import style from './cronometer.module.scss';

interface propsCronometro {
  selecionado: tipoTarefas | undefined;
}

const Cronometer: React.FC<propsCronometro> = ({ selecionado }) => {
  const [tempo, setTempo] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(conversionTime(selecionado.tempo));
    }
  }, [selecionado]);

  function conversionTime(tempo: string) {
    const timeParts = tempo.split(':').map(part => parseInt(part, 10));
    const isValidTime =
      timeParts.every(part => !isNaN(part)) && (timeParts.length === 2 || timeParts.length === 3);
  
    if (isValidTime) {
      const [horas, minutos, segundos = 0] = timeParts;
      const horasEmSegundos = horas * 3600;
      const minutosEmSegundos = minutos * 60;
      return horasEmSegundos + minutosEmSegundos + segundos;
    } else {
      console.error('Invalid time format:', tempo);
      return 0; // or return undefined; based on your use case
    }
  }

  return (
    <>
      <div className={style.cronometro}>
        <p className={style.titulo}>Escolha uma atividade e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
          <Relogio tempo={tempo} />
        </div>
        <Button buttonName="Iniciar" />
      </div>
    </>
  );
};

export default Cronometer;
