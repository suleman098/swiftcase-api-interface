const convertToUnixTimestamp = (dateString) => {
  return Math.floor(new Date(dateString).getTime() / 1000); // Convert to Unix timestamp in seconds
};

/**
 * Updates the dates into unix timestamps  into  in the provided task details.
 * @param {Array} AllTaskDetails - The array of task details containing fields with potential date values.
 * @returns {Array} - A new array of task details with updated date values as Unix timestamps.
 * */
const updateTimestamps = (AllTaskDetails) => {
  return AllTaskDetails.map((taskDetail) => {
    const updatedData = taskDetail.data.map((field) => {
      // Check if the field is a date field, and if so, convert it to Unix timestamp
      if (field.name === "date_ordered") {
        return {
          ...field,
          value: convertToUnixTimestamp(field.value), // Convert the date
        };
      }
      return field; // Return the field unchanged if not a date field
    });

    return {
      id: taskDetail.id, // Include the task ID
      ...taskDetail,
      data: updatedData,
    };
  });
};

const formatTaskDetails = (task) => {
  return task.data
    .map((field) => {
      return `${field.name}: ${field.value}`; // Format each field
    })
    .join(", "); // Join fields with a comma
};

const calculateCost = (data) => {
  const cancelledField = data.find((item) => item.name === "cancelled");
  const costField = data.find((item) => item.name === "cost");

  if (cancelledField && cancelledField.value === "No" && costField) {
    return parseFloat(costField.value) || 0; // Convert to number
  }
  return 0;
};

/**
 * Upload the file to the specified API.
 *
 * @param {string} url - API endpoint URL.
 * @param {Object} payload - Payload containing file data.
 * @return {Promise<Response>} - Fetch API response.
 */
const uploadFile = async (url, payload) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return response;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw new Error("An error occurred while uploading the file.");
  }
};

/**
 * Format task details into base64 string for upload.
 * @param {Array} tasks - Array of task timestamps.
 * @return {string} - Base64 encoded string for the file.
 */
const formatTaskData = (tasks) => {
  const formattedData = tasks
    .map((task) => {
      return `ID: ${task.id}, ${formatTaskDetails(task)}`; // Assumes formatTaskDetails is a helper
    })
    .join("\n");

  return btoa(formattedData); // Convert to base64 encoding
};

const validateUploadData = (data) => {
  return data && data.length > 0;
};

export {
  convertToUnixTimestamp,
  updateTimestamps,
  formatTaskDetails,
  calculateCost,
  uploadFile,
  formatTaskData,
  validateUploadData,
};
