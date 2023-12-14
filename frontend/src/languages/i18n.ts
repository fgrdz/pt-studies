import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          task: 'Task',
          pickOne: 'Pick one task and start the timer',
          studies: 'Studies list',
          buttonAdd: 'Add',
          start: 'Start',
          pause: 'Pause',
          delete: 'Delete',
          select: 'Select'
        },
      },
      pt: {
        translation: {
          task: 'Tarefa',
          pickOne: 'Escolha uma atividade e inicie o cronômetro',
          studies: 'Lista de estudos',
          buttonAdd: 'Adicionar',
          start: 'Iniciar',
          pause: 'Pausar',
          delete: 'Excluir',
          select: 'Selecionar'
          
        },
      },
      
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;