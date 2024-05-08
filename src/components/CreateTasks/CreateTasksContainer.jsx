import { connect } from 'react-redux';
import {addTaskActionNameCreator, addTaskActionAboutCreator, updateNewTaskNameActionCreator, updateNewTaskAboutActionCreator} from '../../reducer/ToDoListReducer'
import TasksBlock from './CreateTasksBlock'
import React from 'react'

class TasksContainer extends React.Component  {

    addTaskNameFunc = () => {
        this.props.addTaskActionNameCreator()
    }

    updateNewTaskTextNameFunc = (text) => {
        this.props.updateNewTaskNameActionCreator(text)
    }

    //------------------------------------------//

    updateNewTaskTextAboutFunc = (text) => {
        this.props.updateNewTaskAboutActionCreator(text)
    }


    // deleteTaskActionCreatorFunc = (id) => {
    //     this.props.deleteTaskActionCreator(id)
    // }

    render() {

        return <>
          <TasksBlock newTextName = {this.props.newTextName}
                      taskDataName = {this.props.taskDataName}
                      newTextAbout = {this.props.newTextAbout}
                      taskDataAbout = {this.props.taskDataAbout}
                      updateNewTaskTextNameFunc = {this.updateNewTaskTextNameFunc}
                      addTaskNameFunc = {this.addTaskNameFunc}
                      updateNewTaskTextAboutFunc = {this.updateNewTaskTextAboutFunc}
                    //   deleteTaskActionCreatorFunc = {this.deleteTaskActionCreatorFunc}
                    />
        </> 
    }
}

let mapStateToProps = (state) => {
    return {
        newTextName: state.taskPage.newTaskNameText,
        taskDataName: state.taskPage.tasksName,

        newTextAbout: state.taskPage.newTaskAboutText,
        taskDataAbout: state.taskPage.tasksAbout
    }

}

export default connect(mapStateToProps, {
    addTaskActionNameCreator,
    updateNewTaskAboutActionCreator,
    updateNewTaskNameActionCreator
}) (TasksContainer)
