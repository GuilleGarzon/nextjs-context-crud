import { useRouter } from 'next/navigation';
import { useTasks } from '../context/TasksContext';

export const TaskCard = ({ task }) => {

  const router = useRouter();
  const { deleteTask } = useTasks();

  return (
    <div style={{ background: "#202020", color: "white" }}
      onClick={() => router.push(`/edit/${task.id}`)}
    >
      <h1>{task.title}</h1>
      <button onClick={(event) => {
        event.stopPropagation()
        deleteTask(task.id)}}
      >
        Delete
      </button>
      <p>{task.description}</p>
    </div>
  );
}

