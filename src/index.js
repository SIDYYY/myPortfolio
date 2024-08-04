import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Timer from './projects/timer';
import Que from './projects/que';
import Calc from './projects/cal';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter basename='/myPortfolio'>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/que" element={<Que />} />
        <Route path="/calc" element={<Calc />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();


