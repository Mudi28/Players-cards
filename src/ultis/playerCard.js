import "../stile.css";
import { people } from "../data/data";
import { useState } from "react";

function PlayerCard() {
  const [population] = useState(people);

  return (
    <div className="container">
      {population.map((person) => (
        <div className="card" key={person.name}>
          <h2>{person.name}</h2>

          <div className="cards">
            <div className="img">
              <img className="immagine" src={person.img} alt="giocatori"></img>
            </div>

            <iframe
              className="video"
              style={{ frameBorder: "0" }}
              height="315"
              src={person.video}
              title="YouTube video player"
              allow="accelerometer;
                                             autoplay; 
                                             clipboard-write; 
                                             encrypted-media; 
                                             gyroscope; picture-in-picture; 
                                             web-share"
              allowFullScreen
            ></iframe>

            <div>
              <h2 className="card-title"> {person.position}</h2>

              <div className="card-content">
                <p>Team: {person.team}</p>
                <p>Number: {person.jerseyNumber}</p>
                <p>Position: {person.position}</p>
                <p>Goals: {person.goals}</p>
                <p>assists: {person.assists}</p>
                <p>MinutesPlayed: {person.minutesPlayed}</p>
                <p>GamesPlayed: {person.gamesPlayed}</p>
                <p>Substitutions: {person.substitutions}</p>
              </div>

              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>
                        FIFA WP of the Year:[
                        {person["the best fifa men's player"]}]{" "}
                      </th>
                      <th>World Championships: [{person.mondiali}]</th>
                      <th>Champions League: [{person["champions league"]}]</th>
                      <th>Championships Won: [{person["campionati vinti"]}]</th>
                      <th>FIFA Puskas: [{person["fifa puskas"]}]</th>
                      <th>Golden Boots: [{person["golden boots"]}]</th>
                      <th>
                        The Best FIFA Men’s Player: [
                        {person["the best fifa men's player"]}]
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card-linl-wrapper">
                <a href={person.palmares} className="card-link">
                  Palmares Transfermarkt.it
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { PlayerCard };
