import { memo } from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useEffect } from "react";
import Taskstable from "../components/Taskstable";

/**
 * Tasks component that displays a list of task IDs and renders a table of task details.
 */

const Tasks = memo(() => {
  const { tasksData, setError } = useContext(AppContext);

  // Extract task IDs from tasksData
  const taskIds = tasksData.task_ids;

  useEffect(() => {
    if (!taskIds || taskIds.length === 0) {
      setError(
        "Could not find anything. Please double-check the task status ID"
      );
    }
  }, [taskIds, setError]);

  // If there are no task IDs, return null to prevent rendering
  if (!taskIds || taskIds.length === 0) return null;

  return (
    <div>
      <h3>{taskIds.length > 0 && `${taskIds.length} Task IDs Found`}</h3>
      <ul>
        {taskIds.map((task, index) => (
          <li key={task.id}>
            {index + 1} : {task.id}
          </li>
        ))}
      </ul>
      {tasksData && <Taskstable />}
    </div>
  );
});

export default Tasks;
