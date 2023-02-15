import React from "react";
import "../../stile.css";
import { All } from "./all";
import sfondo from "./sfondografico.jpg";
function Grafici() {
  return (
    <div
      className="bob"
      style={{
        backgroundImage: `url(${sfondo})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="col col-sm-3 col-md-4 col-lg-4">
          <div className="col-md-3 col-xs-6">
            <h1 className="font">Grafici a Confronto</h1>

            <All />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Grafici;
