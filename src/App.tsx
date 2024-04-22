import React from 'react';
import {GlobalStateProvider} from "./context/GlobalStateContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Additional from "./pages/Addtional";

const App: React.FC = () => {
    return (
        <GlobalStateProvider>
            <Router>
                <Routes>
                    <Route path="/" element= {<Home />} />
                    <Route path="/additional" element= {<Additional />} />
                </Routes>
            </Router>
        </GlobalStateProvider>
    );
};

export default App;