/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import GameBoard from "./GameBoard/GameBoard";
import { useState } from "react";

function App() {
    const [gifQuery, setGifQuery] = useState("theoffice");
    const [imageTerm, setImageTerm] = useState("theoffice");

    function handleSetGifQuery(event) {
        setGifQuery(event.target.value);
    }
    function updateImages() {
        setImageTerm(gifQuery);
    }

    return (
        <div className="main-container">
            <ScoreBoard />
            <label htmlFor="seach-query">Change Images:</label>
            <input
                id="seach-query"
                value={gifQuery}
                onChange={handleSetGifQuery}
            ></input>
            <button onClick={updateImages}>Search</button>
            <GameBoard imageTerm={imageTerm} />
        </div>
    );
}

export default App;
