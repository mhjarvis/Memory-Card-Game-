import "./GameBoard.css";
import { useEffect, useState } from "react";

export default function GameBoard() {
    const key = "mnRGTWhmR1tglJdz7aq3Uc6sHGhbzlXy";
    const limit = 1;
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=the+office&limit=${limit}&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`;

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

    function shuffle() {
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
        setGifs([...arr])
    }

    return (
        <div className="images-container">
            {gifs.length > 0
                ? gifs.map((gif, index) => {
                      return (
                          <div key={index} className="game-images">
                              <img
                                  src={gif.images.fixed_height_downsampled.url}
                              />
                          </div>
                      );
                  })
                : ""}
            <button onClick={shuffle}>Click</button>
        </div>
    );
}
