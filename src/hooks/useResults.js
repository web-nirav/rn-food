import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async (searchTerm) => {
    console.log("Hi There!");
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 15,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      //   console.log(response.data.businesses);
    } catch (e) {
      setErrorMessage("Something went wrong!");
    }
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, results, errorMessage];
};
