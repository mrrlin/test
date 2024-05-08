import s from './CreateTaskAbout.module.css'
import React from 'react'
import Voice from '../../../assets/image/voice.png'


const CreateTaskAbout = (props) => {

    let newTaskElementText = React.createRef();

    let onTaskChange = () => {
        let text = newTaskElementText.current.value;
        props.updateNewTaskTextAboutFunc(text);
    };

    let startVoiceRecognition = () => {
        const recognition = new window.webkitSpeechRecognition();
        
        recognition.onresult = (event) => {
            const speechToText = event.results[0][0].transcript;
            newTaskElementText.current.value = speechToText;
            onTaskChange()
        };
        
        recognition.start();
    };

    return (
        <div className={s.block}>
            <div className={s.lineForm}>
                <textarea ref={newTaskElementText} onChange={onTaskChange} placeholder='About' value={props.newTextAbout}/>
                <img onClick={startVoiceRecognition} className={s.buttonVoice} src={Voice}></img>
            </div> 
        </div>
    );
}

export default CreateTaskAbout; 