/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import GameBoard from "./GameBoard/GameBoard";
import SearchBox from "./SearchBox/SearchBox";
import { useState } from "react";

function App() {
    const [gifQuery, setGifQuery] = useState("theoffice");
    const [imageTerm, setImageTerm] = useState("theoffice");
    const [scores, setScores] = useState({ currentScore: 0, highScore: 0 });

    function handleSetGifQuery(event) {
        setGifQuery(event.target.value);
    }
    function updateImages() {
        setImageTerm(gifQuery);
    }
    function updateScores() {
        if (scores.currentScore + 1 > scores.highScore) {
            setScores({
                currentScore: scores.currentScore + 1,
                highScore: scores.currentScore + 1,
            });
        } else {
            setScores({
                currentScore: scores.currentScore + 1,
                highScore: scores.highScore,
            });
        }
    }
    function resetScore() {
        setScores({
            currentScore: 0,
            highScore: scores.highScore,
        });
    }

    return (
        <div className="main-container">
            <ScoreBoard highScore={scores.highScore} currentScore={scores.currentScore} />
            <SearchBox
                gifQuery={gifQuery}
                handleSetGifQuery={handleSetGifQuery}
                updateImages={updateImages}
            />
            <GameBoard
                imageTerm={imageTerm}
                updateScores={updateScores}
                resetScore={resetScore}
            />
        </div>
    );
}

export default App;
