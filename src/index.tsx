import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App";
import {SpeedInsights} from "@vercel/speed-insights/react";

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
                <App/>
            <SpeedInsights/>
        </React.StrictMode>
    );
}