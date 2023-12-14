import React from 'react';

import style from './style.module.scss'
import TaskContainer from '../../components/organisms/TaskContainer/taskContainer';
import LanguageSelector from '../../languages/LanguageSelector';
import Header from '../../components/organisms/header/header';

function App() {
  
  return (
  <>
    <Header/>
    <div className={style.language}>
        <LanguageSelector/>
        
    </div>
    <div className={style.AppStyle}>
        <TaskContainer/>
    </div>

    </>
  );
}

export default App;
