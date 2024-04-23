/* eslint-disable no-unused-vars */

import { useState } from "react";

export default function ScoreBoard() {
    const [highScore, setHighScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);

    function updateCurrentScore() {
        setCurrentScore((last) => last + 1)
    }
    function updateHighScore() {
        setHighScore(currentScore)
    }

    return (
        <div>
            <h1>MemoryGame</h1>
            <div>
                <p>Current Score: {currentScore}</p>
                <p>High Score: {highScore}</p>
            </div>
        </div>
    );
}
