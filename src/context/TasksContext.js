"use client"
import { createContext, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTasks must used withing a provider');
  return context
}

export const TaskProvider = ({children}) => {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "My first task",
      description: "Some Task"
    },
    {
      id: 2,
      title: "My second task",
      description: "Some second Task"
    },
    {
      id: 3,
      title: "My third task",
      description: "Some third Task"
    },
  ])  

  const createTask = (title, description) => {
    setTasks([...tasks, {
      title,
      description,
      id: uuid(),
    }]);
  }

  const deleteTask = (id) => {
    setTasks(
      [...tasks.filter(task => task.id !== id)]
    );
  };
  

  return (
  <TaskContext.Provider 
    value={{
      tasks,
      createTask,
      deleteTask
    }} >
    { children }
  </TaskContext.Provider>)
}