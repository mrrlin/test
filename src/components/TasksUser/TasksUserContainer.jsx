import { connect } from 'react-redux';
import React from 'react'
import TasksUserBlock from './TasksUser';

class TasksUserContainer extends React.Component  {
    render() {

        return <>
          <TasksUserBlock newText = {this.props.newTextName}
                      taskData = {this.props.taskData}/>
        </> 
    }
}

let mapStateToProps = (state) => {
    return {
        newTextName: state.taskPage.newTaskNameText,
        taskData: state.taskPage
    }

}

export default connect(mapStateToProps) (TasksUserContainer)
