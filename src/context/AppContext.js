import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // All of the piece of gloabl state for functionality and UI control
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tasksData, setTasksData] = useState(null);
  const [AllTaskDetails, setAllTaskDetails] = useState([]);
  const [TotalCost, setTotalCost] = useState(0);
  const [AllTimestamps, setAllTimestamps] = useState(null);
  const [modalMessage, setModalMessage] = useState(null); // State to hold modal message
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [FormattedTotalcost, setFormattedTotalcost] = useState(0);

  const subdomain = "demonstration";
  const apiKey = "855dcc277783198d5afbb8d52890e6c4";
  const uploadtaskID = 361;

  const resetStates = () => {
    setError("");
    setLoading(false);
    setTasksData(null);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        subdomain,
        apiKey,
        uploadtaskID,
        error,
        setError,
        loading,
        setLoading,
        setTotalCost,
        AllTimestamps,
        setAllTimestamps,
        setAllTaskDetails,
        AllTaskDetails,
        tasksData,
        TotalCost,
        setTasksData,
        resetStates,
        modalMessage,
        setModalMessage,
        showModal,
        setShowModal,
        closeModal,
        setFormattedTotalcost,
        FormattedTotalcost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
