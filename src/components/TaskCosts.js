import { calculateCost } from "../utils/Helpers";
import AppContext from "../context/AppContext";
import { useContext } from "react";
import { useEffect } from "react";
function TaskCosts() {
  const {
    AllTaskDetails,
    TotalCost,
    setTotalCost,
    FormattedTotalcost,
    setFormattedTotalcost,
    setLoading,
  } = useContext(AppContext);

  useEffect(() => {
    if (AllTaskDetails) {
      setLoading(true); // Set loading state to true

      // Calculate the total cost
      const total = AllTaskDetails.reduce((acc, task) => {
        return acc + calculateCost(task.data);
      }, 0);

      // Update the global state for costs
      setTotalCost(total);
      setFormattedTotalcost(`£${total.toFixed(2)}`);

      setLoading(false); // Set loading state to false after calculation
    }
  }, [AllTaskDetails, setTotalCost, setFormattedTotalcost, setLoading]);

  if (!TotalCost || TotalCost === 0) {
    return (
      <div className="mt-4 text-center">
        <p>No costs available.</p>
      </div>
    );
  }

  return (
    <div className="stat-desc text-secondary bold">
      <div>TotalCost: {TotalCost && TotalCost}</div>
      <div>Formatted Cost: {FormattedTotalcost && FormattedTotalcost}</div>
    </div>
  );
}

export default TaskCosts;
