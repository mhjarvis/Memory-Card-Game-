/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./App.css";
import ScoreBoard from "./ScoreBoard/ScoreBoard";
import GameBoard from "./GameBoard/GameBoard";

function App() {



    return (
        <div className="main-container">
            <ScoreBoard />
            <GameBoard />
        </div>
    );
}

export default App;
