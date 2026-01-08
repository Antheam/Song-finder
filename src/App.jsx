// import { useState } from "react";

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
      <div>
        <h1>Get That Song</h1>
        {
          <div className="App">
            <SearchBar />
          </div>
        }
        <div className="App-playlist">
          <SearchResults />
        </div>
      </div>
    </>
  );
}

export default App;
