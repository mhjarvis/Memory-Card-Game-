/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import "./GameBoard.css";
import { useEffect, useState } from "react";

export default function GameBoard({ imageTerm, testScores, resetScore }) {
    const [gifs, setGifs] = useState([]);
    const [used, setUsed] = useState([]);

    const key = "JMj1BRvMsWAFmzwPNMHArjXfgBxkmZK0";
    const limit = 6;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${imageTerm}&limit=${limit}&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`;

    // Initial api call (reuse during button click)
    useEffect(() => {
        fetch(url) // add url to start
            .then((response) => response.json())
            .then((data) => {
                setGifs(data.data);
            });
        return () => {
            setGifs([]);
        };
    }, [url]);

    function checkedIfUsed(event) {

        if (used.includes(event.target.currentSrc)) {
            console.log("its already here");
        } else {
            setUsed((previous) => previous.concat(event.target.currentSrc));
        }
        
    }

    // Function that shuffles the images displayed on screen
    function shuffle(event) {
        checkedIfUsed(event);
        //checkedIfUsed()
        let currentIndex = gifs.length;
        let arr = [...gifs];

        while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [arr[currentIndex], arr[randomIndex]] = [
                arr[randomIndex],
                arr[currentIndex],
            ];
        }
        setGifs([...arr]);
    }

    return (
        <div className="images-container">
            {gifs.length > 0
                ? gifs.map((gif, index) => {
                      return (
                          <div key={index} className="game-images">
                              <img
                                  src={gif.images.fixed_height_downsampled.url}
                                  onClick={() => checkedIfUsed(event)}
                              />
                          </div>
                      );
                  })
                : ""}
            <button onClick={shuffle}>Click</button>
        </div>
    );
}
