import { useState } from "react";
import { useEffect } from "react";
import "./News.css";

const News = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch("https://newsapi.org/v2/everything?q=apple&from=2024-01-27&to=2024-01-27&sortBy=popularity&apiKey=7dbbdfa611ca4c9095e8653638c278a2");
    let data = await resonse.json();
    setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2 className="text-center">
        <b> Latest </b> <span className="badge bg-danger mt-5">News</span>
      </h2>

      <div className="mainDiv">
        {mynews.map((ele) => {
          return (
            <>
              {" "}
              <div className="card bg-dark text-light mb-3 d-inline-block my-5 mx-4 px-2 py-2" style={{ maxWidth: "350px" }}>
                <img src={ele.urlToImage == null ? "https://t3.ftcdn.net/jpg/03/27/55/60/360_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg" : ele.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{ele.author == null ? "Robbi A Ilham" : ele.author}</h5>
                  <p className="card-text">{ele.title}</p>
                  <a href={ele.url} className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default News;
