/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import "./ScoreBoard.css";

export default function ScoreBoard({ highScore, currentScore }) {
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
