const ADD_TASK_NAME = 'ADD_TASK_NAME';
const ADD_TASK_ABOUT = 'ADD_TASK_ABOUT';
const UPDATE_NEW_TASK_NAME_TEXT = 'UPDATE_NEW_TASK_NAME_TEXT';
const UPDATE_NEW_TASK_ABOUT_TEXT = 'UPDATE_NEW_TASK_ABOUT_TEXT';
const DELETE_TASK = 'DELETE_TASK';

let initialState = {
    tasksName: [
        ],
    
    newTaskNameText: '',
    newTaskAboutText: '',

    Id1: 1,
    Id2: 1,
}

const ListReducer = (state = initialState, action) => {
    window.state = state
    switch(action.type) {
        case ADD_TASK_NAME: 
            let body = state.newTaskNameText
            let body1 = state.newTaskAboutText
            let newId = state.Id1 ++
            if (state.newTaskText === '') {
                alert('Введи задание, чтобы добавить его!')
            }else {
                return {
                    ...state,
                    newTaskNameText: '',
                    newTaskAboutText: '',
                    tasksName: [...state.tasksName, {id1: newId, case1: body, case2: body1}]
                }
            }
        case UPDATE_NEW_TASK_NAME_TEXT: 
            return {
                ...state,
                newTaskNameText: action.newTextName
            }

        case UPDATE_NEW_TASK_ABOUT_TEXT: 
            return {
                ...state,
                newTaskAboutText: action.newTextAbout
            }

        case DELETE_TASK:
            let updatedTasks = state.tasksName.filter(task => task.id !== action.id);
            return {
                ...state,
                tasksName: updatedTasks
            }
        
        default:
            return state;
    }

}

export const addTaskActionNameCreator = () => {
    return {
        type: ADD_TASK_NAME
    }
}

export const addTaskActionAboutCreator = () => {
    return {
        type: ADD_TASK_ABOUT
    }
}

export const deleteTaskActionCreator = (id) => {
    return {
        type: DELETE_TASK, id
    }
}

export const updateNewTaskNameActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TASK_NAME_TEXT, newTextName: text
    }
}

export const updateNewTaskAboutActionCreator = (text) => {
    return {
        type: UPDATE_NEW_TASK_ABOUT_TEXT, newTextAbout: text
    }
}

export default ListReducer