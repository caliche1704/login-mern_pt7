import { createContext } from 'react';
import { createTasksRequest } from '../api/task';

const TaskContext = createContext();

export const useTasks = ()=>{
    const  context =useContext(TaskContext);

    if(!context){
        throw new Error('useTasks must be used0')
    }

    return context;
}

export function TaskProvider({ children }){
    const [taks, setTasks] = useState([]);

    const createTask = async (task) =>{
        console.log('task');
        const res = await createTasksRequest(task);
        console.log(res);


    }

    return(
        <TaskContext.Provider value={{ 
            taks,
            createTask
            }}>
            { children }
        </TaskContext.Provider>
    )
}