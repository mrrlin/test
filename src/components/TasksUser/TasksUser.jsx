import s from './TasksUser.module.css'
import Option from '../../assets/image/option.png'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Remove from '../../assets/image/remove.png'


const TasksUserBlock = (props) => {
    const [showNewElement, setShowNewElement] = useState(false);
    const [newNameText, setNewNameText] = useState('');
    const [newAboutText, setNewAboutText] = useState('');

    const handleClick = (textName, textAbout) => {
        setNewNameText(textName);
        setNewAboutText(textAbout);
        setShowNewElement(true);
    };

    const handleClickClose = () => {
        setShowNewElement(false);
    };

    return (
        <div className={s.TasksBlock}>
            
            <div className={s.addTask}>
                <Link to='/Admin'><button className={s.buttonSend}>+</button></Link>
            </div>
            
            {showNewElement ? <div className={s.NewElement}>
                <div className={s.Diiv}>
                    <img src={Remove} onClick={handleClickClose}></img>
                    <p>{newNameText}</p>
                </div>
                <div className={s.Div}><p>{newAboutText}</p></div>
            </div> : ''}

            <div className={s.Tasks}>
                {props.taskData.tasksName.map((p) => (
                    <div className={s.CellBlock}>
        
                        <span>{p.case1}</span> 
                        <img className={s.ChangeButton} onClick={() => handleClick(p.case1, p.case2)} src={Option}></img>
                    </div>
                ))} 
            </div>
        </div>

    );
}

export default TasksUserBlock;