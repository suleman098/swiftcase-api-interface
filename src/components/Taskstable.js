import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";
import { updateTimestamps } from "../utils/Helpers"; // Adjust the import based on your file structure
import TaskCosts from "../components/TaskCosts";
import Downloaddata from "./Downloaddata";
import UploadData from "./UploadData";
import useFetchTaskDetails from "../hooks/useFetchTaskDetails";
function Taskstable() {
  const {
    AllTaskDetails,
    setAllTimestamps,
    AllTimestamps,
    loading,
    tasksData,
    setLoading,
  } = useContext(AppContext);

  useFetchTaskDetails(tasksData?.task_ids);

  useEffect(() => {
    if (AllTaskDetails && AllTaskDetails.length > 0) {
      setLoading(true); // Set loading to true when starting the update

      const updatedTimestamps = updateTimestamps(AllTaskDetails);
      setAllTimestamps(updatedTimestamps); // Update context state with updated timestamps
      setLoading(false); // Set loading to false after updating
    }
  }, [AllTaskDetails, setAllTimestamps]);

  return (
    <>
      <button
        className="btn mt-4"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        View Task Details
      </button>

      <dialog id="my_modal_1" className="modal bg-blur ">
        <div className="modal-box bg-white ">
          <h3 className="font-bold text-lg">Task Details</h3>
          <TaskCosts />
          {loading ? (
            <p>Getting Task Details...</p>
          ) : AllTimestamps && AllTimestamps.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table table-xs">
                <thead className="font-bold text-black">
                  <tr>
                    {AllTimestamps[0]?.data.map((field, idx) => (
                      <th key={idx}>{field.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {AllTimestamps.map((task, index) => (
                    <tr key={index}>
                      {task.data.map((field, idx) => (
                        <td key={idx}>{field.value || "N/A"}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          <div className="modal-action">
            <form method="dialog">
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <UploadData />
                  {AllTimestamps && <Downloaddata />}

                  <button className="btn btn-outline btn-error">Close</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Taskstable;
