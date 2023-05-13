"use client"
import { useState } from 'react';
import { useTasks } from '../../context/TasksContext';
import { useRouter } from 'next/navigation';

function Page() {

  const [task, setTask] = useState();
  const { createTask } = useTasks();
  const router = useRouter();

  const handleChange = (event) => {
    setTask({ ...task, 
      [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask(task.title, task.description);
    router.push('/');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Write a title"
        onChange={handleChange}
      />
      <textarea name="description" placeholder="Write a description"
        onChange={handleChange}
      />
      <button>Save</button>
    </form>
  )
}

export default Page