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
    const [highScore, setHighScore] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);

    function updateCurrentScore() {
        setCurrentScore((last) => last + 1);
    }
    function updateHighScore() {
        setHighScore(currentScore);
    }
    function handleSetGifQuery(event) {
        setGifQuery(event.target.value);
    }
    function updateImages() {
        setImageTerm(gifQuery);
    }
    function updateScores() {
        console.log('updating scores');
        setCurrentScore((last) => last + 1)
    }
    function resetScore() {
        setCurrentScore(0);
    }

    return (
        <div className="main-container">
            <ScoreBoard highScore={highScore} currentScore={currentScore} />
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
