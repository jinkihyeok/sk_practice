import React from 'react';
import {GlobalStateProvider} from "./contexts/GlobalStateContext";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Additional from "./pages/Addtional";
import {LocaleStateProvider} from "./contexts/LocaleStateContext";

const App: React.FC = () => {
    return (
        <GlobalStateProvider>
            <LocaleStateProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/additional" element={<Additional/>}/>
                    </Routes>
                </Router>
            </LocaleStateProvider>
        </GlobalStateProvider>
    );
};

export default App;