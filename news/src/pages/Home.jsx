import React, { useState } from "react";
import InputBox from "../components/InputBox";
import ResultCard from "../components/ResultCard";
import axios from "axios";

const Home = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkNews = async (query) => {
    setLoading(true);
    setError("");
    setResult(null);

    try {
        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
     const response = await axios.get(
  `${API_BASE_URL}/api/news?q=${query}`
);


      const score = response.data.articles.length > 0 ? 80 : 30;

      setResult({
        authenticity: score,
        sources: response.data.articles.slice(0, 3).map(a => a.url),
      });
    } catch (err) {
      setError("⚠️ Failed to fetch news. Please try again.");
      console.log(err)
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-xl">
      <InputBox onCheck={checkNews} />
      {loading && <p className="text-blue-500 font-medium mt-4">Checking authenticity...</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {result && <ResultCard data={result} />}
    </div>
  );
};

export default Home;
