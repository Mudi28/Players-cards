import "./stile.css";
import { Link } from "react-router-dom";
function Barra() {
  return (
    <div className="topnav">
      <Link to="/">
        <h3 className="nav">HOME</h3>
      </Link>
      <Link to="/players">
        <h3 className="nav">ALL PLAYERS</h3>
      </Link>
    </div>
  );
}

export { Barra };
