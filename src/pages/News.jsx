import React, { useState, useEffect } from "react";
import { BASE_URL } from "../components/data/data.jsx";
import Navbar from "../components/Navbar.jsx";
import CatalogueVideo from "../components/CatalogueVideo.jsx";
import "../index.css";

const News = () => {
  const [news, setNews] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    fetch(`${BASE_URL}/news?search=${searchText}`)
      .then((response) => response.json())
      .then((data) => setNews(data));
  };

  useEffect(() => {
    fetch(`${BASE_URL}/news`)
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <Navbar />
      <CatalogueVideo />
      <div className="news-container">
        <h1>Latest News Articles</h1>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Search for favourite events"
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        <div className="news-list">
          {news.map((newser) => (
            <div key={newser.id} className="news-item">
              <img src={newser.image_url} alt="News" />
              <div className="news-details">
                <h2>{newser.title}</h2>
                <p>{newser.description}</p>
                <p>Location: {newser.location}</p>
                <p>Ticket Price: {newser.ticket_price}</p>
                <p>Date: {newser.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
