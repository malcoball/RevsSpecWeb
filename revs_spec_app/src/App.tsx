import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { useState, useContext } from "react";

import SearchPage from './Pages/Search/searchPage';
import SpecScreen from './Pages/SpecScreen/specScreen';
import AppContextProvider, { AppContext } from "./Data/Context/AppContext";

import './App.css';
import './shared.css';

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
      <div className="appContainer bColor0">
        <main className="bColor0">
          <Routes>
            <Route path="/" element={<SearchPage/>}/>
            <Route path="/specScreen" element={<SpecScreen/>}/>
          </Routes>
        </main>
      </div>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
