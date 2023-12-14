import React from 'react';

import style from './style.module.scss'
import TaskContainer from '../../components/organisms/TaskContainer/taskContainer';
import LanguageSelector from '../../languages/LanguageSelector';

function App() {
  
  return (
  <>
    <LanguageSelector/>
    <div className={style.AppStyle}>
        
        <TaskContainer/>
        
       
    </div>
    </>
  );
}

export default App;
