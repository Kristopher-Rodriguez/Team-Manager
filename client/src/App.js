import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAllPlayers from "./components/DisplayAllPlayers";
import AddPlayer from "./components/AddPlayer";
import { useState } from "react";

function App() {
  const [listPageIsActive, setListPageIsActive] = useState(true);
  return (
    <div className="app">
      <h1>Manage Players | Manage Player Status</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/players/list"
            element={
              <DisplayAllPlayers
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive}
              />
            }
            default
          />
          <Route
            path="/players/addplayer"
            element={
              <AddPlayer
                listPageIsActive={listPageIsActive}
                setListPageIsActive={setListPageIsActive}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
