import React, { useState } from "react";
import OverView from "./OverView";
import Weather from './Weather';
import Symbol from "./Symbol";

const MainDisplay = () => {
    const [view, setView] = useState("Overview");
    return (
        <div className="stack">
            <div className="tab-select">
                <button onClick={() => setView("Overview")}>Overview</button>
                <button onClick={() => setView("Weather")}>
                    Current Weather at Capitol
                </button>
                <button onClick={() => setView("Symbols")}>Symbols</button>
            </div>
            {view === "Overview" && <OverView/>}
            {view === "Weather" && <Weather/>}
            {view === "Symbols" && <Symbol/>}
        </div>
    );
};

export default MainDisplay;
