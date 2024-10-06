import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { formatTaskDetails } from "../utils/Helpers";

function Downloaddata() {
  const { AllTimestamps, TotalCost, FormattedTotalcost } =
    useContext(AppContext); // Access TotalCost and formattedTotalCost from context

  const handleDownload = () => {
    if (!AllTimestamps || AllTimestamps.length === 0) {
      alert("No data available to download.");
      return;
    }

    // Format individual task data
    const formattedData = AllTimestamps.map((task) => {
      return `ID: ${task.id}, ${formatTaskDetails(task)}`; // Use the utility function
    }).join("\n");

    // Prepare the total cost data
    const totalCostData = `\nTotal Cost (Raw): ${TotalCost}\nTotal Cost (Formatted): ${FormattedTotalcost}`;

    // Combine both the individual task data and the total cost data
    const completeData = formattedData + totalCostData;

    const blob = new Blob([completeData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "task_data.txt"; // Name of the file
    link.click(); // Trigger the download

    // Clean up
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button className="btn" onClick={handleDownload}>
        Download Data
      </button>
    </div>
  );
}

export default Downloaddata;
