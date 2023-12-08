import React from 'react';

import style from './style.module.scss'
import TaskContainer from '../../components/organisms/TaskContainer/taskContainer';
import Cronometer from '../../components/molecules/Cronometer/cronometer';

function App() {
  
  return (
    <div className={style.AppStyle}>
        <TaskContainer/>
        <Cronometer/>
    </div>
  );
}

export default App;
