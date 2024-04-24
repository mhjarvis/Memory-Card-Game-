/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import GameBoard from "./GameBoard/GameBoard";
import { useState } from "react";

function App() {
    const [gifQuery, setGifQuery] = useState("theoffice");

    function handleSetGifQuery(event) {
        setGifQuery(event.target.value);
    }
    function updateImages() {
        setGifQuery("");
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
            <GameBoard gifQuery={gifQuery} />
        </div>
    );
}

export default App;
