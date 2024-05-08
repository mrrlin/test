import s from './CreateTaskName.module.css'
import React from 'react'
import Voice from '../../../assets/image/voice.png'


const CreateTaskName = (props) => {

    let newTaskElementText = React.createRef();

    let onTaskChange = () => {
        let text = newTaskElementText.current.value;
        props.updateNewTaskTextNameFunc(text);
    };

    let startVoiceRecognition = () => {
        const recognition = new window.webkitSpeechRecognition();
        
        recognition.onresult = (event) => {
            const speechToText = event.results[0][0].transcript;
            newTaskElementText.current.value = speechToText;
            onTaskChange(); // Добавляем вызов функции onTaskChange после установки текста в поле textarea
        };
        
        recognition.start();
    };

    return (
        <div className={s.block}>
            <div className={s.lineFormNameTask}>
                <textarea ref={newTaskElementText} onChange={onTaskChange} value={props.newTextName} placeholder='Name Task'/>
                <img onClick={startVoiceRecognition} className={s.buttonVoice} src={Voice}></img>
            </div> 
        </div>
    );
}

export default CreateTaskName; 