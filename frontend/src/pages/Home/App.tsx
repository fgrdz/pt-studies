import React from 'react';

import style from './style.module.scss'
import TaskContainer from '../../components/organisms/TaskContainer/taskContainer';

function App() {
  
  return (
    <div className={style.AppStyle}>
        <TaskContainer/>
       
    </div>
  );
}

export default App;
