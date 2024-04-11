import { useState} from 'react';
// import { Value } from 'sass';

const UseTodo = (initialValue) => {
  const [tasks, setTasks] = useState(initialValue);
  return {
    tasks,
    addTask: () => {
      const newTask = {
        id: Date.now(),
        // body: value.body,
        isDone: false,
      };
      setTasks([...tasks, newTask]);
      
      
    },
    deleteTask: (id)=> {
        setTasks(tasks.filter((task) => task.id !==id));
},};
}

export default UseTodo;
