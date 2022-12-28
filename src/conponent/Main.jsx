import React, { useState } from "react";
import Card from "./Card";
import Axios from "axios";
import AdSense from './AdsPage';

function Main() {
  const [getURL, setGetURL] = useState("");
  const [getFormat, setFormat] = useState("");

  const [getDatas, setData] = useState([]);

  const downloadHandler = async (e) => {
    e.preventDefault();
    await Axios({
      method: "get",
      url: `http://localhost:5001/api/download/?url=${getURL}&format=${getFormat}`,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }).then((res) => {
      setData([
        ...getDatas,
        {
          title: res.data.title,
          playback: res.data.playback,
          preview: res.data.preview_url,
          download: res.data.download,
          id: Math.random * 100,
        },
      ]);
      console.log(res.data);
    });

    setGetURL("");
  };

  return (
    <div className="container">
      <div className="centerForm">
        <h1> Download Your Favorite Content</h1>

        <form onSubmit={downloadHandler}>
          <label htmlFor="url">URL:</label>
          <input
            type="text"
            id="url"
            value={getURL}
            onChange={(e) => setGetURL(e.target.value)}
          />
          <label htmlFor="url">Format:</label>
          <select
            name="format"
            id="format"
            value={getFormat}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option value="mp3">MP3</option>
            <option value="mp4">MP4</option>
            <option value="wav">WAV</option>
          </select>
          <button className="download">Download</button>
        </form>
      </div>
        <AdSense/>
      <div className="download-list">
        {getDatas.map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              titles={data?.title}
              playback={data.playback}
              preview={data.preview}
              download={data.download}
              format={getFormat}
            />
          );
        })}
      </div>
      
    </div>
  );
}

export default Main;
