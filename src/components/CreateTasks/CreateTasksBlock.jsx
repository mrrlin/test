import s from './CreateTaskBlock.module.css'
import React from 'react'
import CreateTaskName from './CreateTaskName/CreateTaskName';
import CreateTaskAbout from './CreateTaskAbout/CreateTaskAbout';


const TasksBlock = (props) => {

    let addTask = () => {
        props.addTaskNameFunc()
    }

    return (
        <div className={s.addBlock}>
            <div className={s.createName}>
                <CreateTaskName newTextName={props.newTextName} 
                                taskDataName={props.taskDataName}
                                updateNewTaskTextNameFunc = {props.updateNewTaskTextNameFunc}
                                addTaskNameFunc = {props.addTaskNameFunc}/>
            </div>
            <div className={s.createAbout}>
                <CreateTaskAbout newTextAbout={props.newTextAbout} 
                                 taskDataAbout={props.taskDataAbout}
                                 updateNewTaskTextAboutFunc = {props.updateNewTaskTextAboutFunc}
                                 addTaskAboutFunc = {props.addTaskAboutFunc}/>
            </div>

            <div className={s.blockButton}>
                <button onClick={addTask} className={s.buttonSend}>Add Task</button>
            </div>
        </div>
    );
}

export default TasksBlock; 
