/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const key = "mnRGTWhmR1tglJdz7aq3Uc6sHGhbzlXy";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=the+office&limit=8&offset=0&rating=pg&lang=en&bundle=messaging_non_clips`;

    const [gifs, setGifs] = useState([]);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setGifs(data.data);
            });
        return () => {
            setGifs([]);
        };
    }, []);
    console.log(gifs);

    return (
        <div>
            <h1>Images: </h1>

            {gifs.length > 0
                ? gifs.map((gif, index) => {
                      return (
                          <div key={index}>
                              <img src={gif.images.original.url} />
                          </div>
                      );
                  })
                : "dog"}

            {gifs.length > 0 ? console.log(gifs[0].images.original.url) : ""}
        </div>
    );
}

export default App;
