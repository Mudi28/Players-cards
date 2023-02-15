import { Barra } from "./barra.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { HomePage } from "./homepage";
import { Players } from "./ultis/players.js";
import Grafici from "./ultis/grafici/grafici";
import { people } from "./data/data.js";
function Col() {
  return (
    <Router>
      <div className="mudi">
        <Barra />

        <Routes>
          <Route path="/players" element={<App />} />

          {people.map((person) => (
            <Route
              key={person.id}
              path={`/players/${person.name}`}
              element={<Players person={person} />}
            />
          ))}

          <Route path="/grafici" element={<Grafici />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Col;
