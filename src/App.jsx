/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import GameBoard from "./GameBoard/GameBoard";
import { useState } from "react";

function App() {
    const [gifQuery, setGifQuery] = useState("the+office");

    function updateGifQuery(event) {
        setGifQuery(event.target.value);
    }
    function updateImages() {
        setGifQuery('')
    }

    return (
        <div className="main-container">
            <ScoreBoard />
            <label htmlFor="seach-query">Change Images:</label>
            <input
                id="seach-query"
                value={gifQuery}
                onChange={updateGifQuery}
            ></input>
            <button onClick={updateImages}>Search</button>
            <GameBoard />
        </div>
    );
}

export default App;
