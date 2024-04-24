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

    function handleSetGifQuery(event) {
        setGifQuery(event.target.value);
    }
    function updateImages() {
        setImageTerm(gifQuery);
    }

    return (
        <div className="main-container">
            <ScoreBoard />
            <SearchBox
                gifQuery={gifQuery}
                handleSetGifQuery={handleSetGifQuery}
                updateImages={updateImages}
            />
            <GameBoard imageTerm={imageTerm} />
        </div>
    );
}

export default App;
