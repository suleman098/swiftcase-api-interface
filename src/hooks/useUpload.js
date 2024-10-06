import { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import {
  validateUploadData,
  formatTaskData,
  uploadFile,
} from "../utils/Helpers";

/**
 * Custom hook for handling file uploads within the application.
 */

const useUpload = () => {
  const {
    AllTimestamps,
    subdomain,
    apiKey,
    uploadtaskID,
    setModalMessage,
    setShowModal,
    setLoading,
  } = useContext(AppContext);

  /**
   * Function to handle the file upload process.
   * Validates data, formats it, and sends it to the server.
   */

  const handleUpload = async () => {
    if (!validateUploadData(AllTimestamps)) {
      setModalMessage("No data available to upload.");
      setShowModal(true);
      return;
    }

    setLoading(true);

    try {
      const formattedData = formatTaskData(AllTimestamps);

      const FILE_NAME = "task_data.txt";
      const MIME_FILE_TYPE = "text/plain";
      const url = `https://${subdomain}.swiftcase.co.uk/api/v2/${apiKey}/task/${uploadtaskID}/file.json`;

      const payload = {
        name: FILE_NAME,
        type: MIME_FILE_TYPE,
        data: formattedData,
      };

      // Perform the file upload using the uploadFile helper function
      const response = await uploadFile(url, payload);

      if (response.status === 201) {
        setModalMessage("File uploaded successfully!");
      } else {
        const errorResponse = await response.json();
        setModalMessage(`Failed to upload the file: ${errorResponse.message}`);
      }
    } catch (error) {
      setModalMessage(
        error.message || "An error occurred while uploading the file."
      );
    } finally {
      setShowModal(true);
      setLoading(false);
    }
  };

  return { handleUpload };
};

export default useUpload;
