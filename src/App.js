import './App.css';
import CreateTasksContainer from './components/CreateTasks/CreateTasksContainer';
import TasksUserContainer from './components/TasksUser/TasksUserContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/infinityriver/task-tracker.git' element={<TasksUserContainer />} />
              <Route path='/Admin' element={<CreateTasksContainer />} />
            </Routes>
          </div>
            
        </BrowserRouter>
    </div>
  );
}

export default App;
