/* eslint-disable no-unused-vars */

import { useState } from "react";
import "./ScoreBoard.css";

export default function ScoreBoard() {
    const [highScore, setHighScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);

    function updateCurrentScore() {
        setCurrentScore((last) => last + 1);
    }
    function updateHighScore() {
        setHighScore(currentScore);
    }

    return (
        <div className="scoreboard-container">
            <h1 className="title">MemoryGame</h1>
            <div className="score-container">
                <p className="current-score">Current Score: {currentScore}</p>
                <p className="high-score">High Score: {highScore}</p>
            </div>
        </div>
    );
}
