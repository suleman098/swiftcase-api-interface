import { useState, useContext } from "react";
import AppContext from "../context/AppContext";

import Tasks from "../components/Tasks";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Image from "../components/Image";
import useFetch from "../hooks/useFetch";
import Modal from "../components/Notificationmodal";

function Main() {
  const [submittedNumber, setSubmittedNumber] = useState("");
  const {
    loading,
    tasksData,
    setError,
    setTasksData,
    subdomain,
    apiKey,
    showModal,
    modalMessage,
    closeModal,
  } = useContext(AppContext);

  // Custom hook for fetching data from a given URL whcih returns tthe FetchDatamethod to be used the the result are setwuth in the settasksData state globally
  const { fetchData } = useFetch(
    `https://${subdomain}.swiftcase.co.uk/api/v2/${apiKey}/status/${submittedNumber}.json`
  );

  // Function to fetch data from the specified URL
  // It resets error messages and clears previously fetched task data
  function handleChange(e) {
    setError("");
    setTasksData(null);
    setSubmittedNumber(Number(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Ensure loading starts only when input validation passes
    if (!Number.isInteger(Number(submittedNumber))) {
      setError("Please enter a valid integer.");
      return;
    }

    setError("");
    fetchData(); // Call the fetchData function to fetch tasks based on the submitted ID
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="card bg-white shadow-lg text-black w-96">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Enter Product Status ID</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
          >
            <input
              className="input bg-white shadow-lg input-bordered w-full max-w-xs mb-4"
              type="number"
              value={submittedNumber}
              onChange={handleChange}
              placeholder="Enter Workflow Status ID"
              required
            />
            <div className="card-actions justify-end w-full">
              <button type="submit" className="btn btn-primary w-full">
                Submit
              </button>
              <div className="mt-4 flex items-center justify-center w-full">
                {loading && <Loader />}
              </div>
              {<Error />}
            </div>
          </form>
          {tasksData && <Tasks />}
        </div>
      </div>
      <Image />
      {showModal && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
}

export default Main;
