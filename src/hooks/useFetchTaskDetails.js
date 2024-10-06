import { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";

/**
 * Custom hook to fetch details for multiple tasks based on their IDs.
 *
 * @param {Array} taskIds - An array of task IDs for which to fetch details.
 */

const useFetchTaskDetails = (taskIds) => {
  const { setError, setLoading, setAllTaskDetails, subdomain, apiKey } =
    useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      if (!taskIds || taskIds.length === 0) return;

      setLoading(true);

      try {
        // Create an array to accumulate all task details
        const TaskDetails = await Promise.all(
          taskIds.map(async (task) => {
            const response = await fetch(
              `https://${subdomain}.swiftcase.co.uk/api/v2/${apiKey}/task/${task.id}.json`
            );
            if (!response.ok) {
              throw new Error(
                `Error: ${response.status} ${response.statusText}`
              );
            }
            const result = await response.json();
            return result; // Return the task detail
          })
        );

        // Update state with all task details at once
        setAllTaskDetails(TaskDetails);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [taskIds, setError, setLoading, setAllTaskDetails, subdomain, apiKey]);
};

export default useFetchTaskDetails;
