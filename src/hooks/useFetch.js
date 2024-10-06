import { useState } from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";

/**
 * Custom hook for fetching data from a given URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @returns {Object} - An object containing the fetchData function.
 */

const useFetch = (url) => {
  const { setError, setLoading, setTasksData } = useContext(AppContext);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      setTasksData(result); // Update the global state with the fetched data
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { fetchData };
};

export default useFetch;
