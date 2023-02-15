import React from "react";
import { people } from "./data/data";
import { useState } from "react";
import sfondo from "./sfondohome.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  const [population] = useState(people);

  const groupSize = 3;
  const groups = [];
  for (let i = 0; i < population.length; i += groupSize) {
    groups.push(population.slice(i, i + groupSize));
  }

  const [opacity, setOpacity] = useState(0);
  const [text, setText] = useState("Home Page");

  React.useEffect(() => {
    const words = ["Welcome To ", "Home Page"];
    let i = -1;
    const intervalId = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setText(words[i]);
        setOpacity(1);
      }, 1000);
      i++;
      if (i === 1) {
        clearInterval(intervalId);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="ct"
      style={{
        backgroundImage: `url(${sfondo})`,

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "1200px",
      }}
    >
      <h1
        className="hp"
        style={{
          opacity: opacity,
          transition: "opacity 1s ease-in-out",
        }}
      >
        {text}
      </h1>

      <div className="grid">
        {groups.map((group, index) => (
          <div key={index} className="group">
            {group.map((person) => (
              <Link
                key={person.name}
                to={`/players/${person.name}`}
                style={{ textDecoration: "none" }}
              >
                <div key={person.name}>
                  <div className="icon">
                    <table className="tbl">
                      <tbody>
                        <img
                          className="tim"
                          src={person.imgcard}
                          alt="giocatori"
                        ></img>

                        <tr>
                          <th className="rig">{person.name}</th>
                        </tr>
                        <tr>
                          <th className="rig">{person.team}</th>
                        </tr>
                        <tr>
                          <th className="rig">{person.position}</th>
                        </tr>
                        <tr>
                          <th className="rig">{person.jerseyNumber}</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export { HomePage };
