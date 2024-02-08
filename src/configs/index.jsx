import React, { useEffect, useState } from "react";

export const useApi = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=apple&from=2024-01-28&to=2024-01-28&sortBy=popularity&apiKey=7dbbdfa611ca4c9095e8653638c278a2")
      .then((res) => res.json())
      .then((data) => setNewsArticles(data.articles))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return {
    newsArticles,
  };
};
