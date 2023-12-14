import React, { useEffect, useState } from 'react';
import Relogio from '../../atoms/Relogio/Relogio';
import Button from '../../atoms/button/button';
import tipoTarefas from '../../interfaces';
import style from './cronometer.module.scss';
import { useTranslation } from 'react-i18next';

interface propsCronometro {
  selecionado: tipoTarefas | undefined;
  finalizarTarefa: () => void;
}

const Cronometer: React.FC<propsCronometro> = ({ selecionado, finalizarTarefa }) => {
  const{t}= useTranslation();
  const [tempo, setTempo] = useState<number | undefined>(undefined);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(conversionTime(selecionado.tempo));
    }
  }, [selecionado]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTempo((prevTempo) => {
          if (prevTempo && prevTempo > 0) {
            return prevTempo - 1;
          } else {
            clearInterval(intervalId);
            finalizarTarefa();
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, finalizarTarefa]);

  function conversionTime(tempo: string) {
    const timeParts = tempo.split(':').map((part) => parseInt(part, 10));
    const isValidTime =
      timeParts.every((part) => !isNaN(part)) && (timeParts.length === 2 || timeParts.length === 3);

    if (isValidTime) {
      const [horas, minutos, segundos = 0] = timeParts;
      const horasEmSegundos = horas * 3600;
      const minutosEmSegundos = minutos * 60;
      return horasEmSegundos + minutosEmSegundos + segundos;
    } else {
      console.error('Invalid time format:', tempo);
      return 0;
    }
  }

  function handlePause() {
    setIsRunning(false);
  }

  return (
    <>
      <div className={style.cronometro}>
        <p className={style.titulo}>{t('pickOne')}</p>
        <div className={style.relogioWrapper}>
          <Relogio tempo={tempo} />
        </div>
        <div className={style.divButton}>
          <Button
            onClick={() => {
              setIsRunning((prevIsRunning) => !prevIsRunning);
            }}
            buttonName={isRunning ? t('pause') : t('start')}
          />
        </div>
      </div>
    </>
  );
};

export default Cronometer;

