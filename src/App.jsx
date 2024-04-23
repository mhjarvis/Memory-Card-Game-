/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import ScoreBoard from "./ScoreBoard/ScoreBoard";

function App() {
    const key = "mnRGTWhmR1tglJdz7aq3Uc6sHGhbzlXy";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=the+office&limit=8&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`;

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        fetch(url) // add url to start
            .then((response) => response.json())
            .then((data) => {
                setGifs(data.data);
            });
        return () => {
            setGifs([]);
        };
    }, []);

    return (
        <div className="main-container">
            <ScoreBoard />
            {gifs.length > 0
                ? gifs.map((gif, index) => {
                      return (
                          <div key={index}>
                              <img src={gif.images.original.url} />
                          </div>
                      );
                  })
                : ""}
        </div>
    );
}

export default App;
