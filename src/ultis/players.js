import "../stile.css";
import { people } from "../data/data";

import calcio from "../prova15.jpg";

function Players(props) {
  const person = props.person;

  const filteredPopulation = people.filter(
    (personInPopulation) => personInPopulation.name === person.name
  );

  return (
    <div
      className="back"
      style={{
        backgroundImage: `url(${calcio})`,
      }}
    >
      <div></div>

      <div className="container1">
        <div className="row">
          <div className="col col-sm-3 col-md-4 col-lg-4">
            <div className="col-md-3 col-xs-6">
              <h1 className="font">{person.name}</h1>

              <div className="container1">
                {filteredPopulation.map((person) => (
                  <div className="card" key={person.name}>
                    <h2 className="namep">{person.name}</h2>

                    <div className="cards">
                      <div className="img">
                        <img
                          className="immagine"
                          src={person.img}
                          alt="giocatori"
                        ></img>
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
                          <p className="pcontent">Team: {person.team}</p>
                          <p className="pcontent">
                            Number: {person.jerseyNumber}
                          </p>
                          <p className="pcontent">
                            Position: {person.position}
                          </p>
                          <p className="pcontent">Goals: {person.goals}</p>
                          <p className="pcontent">assists: {person.assists}</p>
                          <p className="pcontent">
                            MinutesPlayed: {person.minutesPlayed}
                          </p>
                          <p className="pcontent">
                            GamesPlayed: {person.gamesPlayed}
                          </p>
                          <p className="pcontent">
                            Substitutions: {person.substitutions}
                          </p>
                        </div>

                        <div className="table-responsive">
                          <table className="table">
                            <tbody>
                              <tr>
                                <th>World Cup:[{person["mondiali"]}] </th>
                                <th>Ballon D'Or:[{person["pallone doro"]}] </th>
                                <th>
                                  FIFA WP of the Year:[
                                  {person["thebestfifamensplayer"]}]{" "}
                                </th>

                                <th>
                                  World Championships: [{person.mondiali}]
                                </th>
                                <th>
                                  Champions League: [{person["championsleague"]}
                                  ]
                                </th>
                                <th>
                                  Championships Won: [
                                  {person["campionativinti"]}]
                                </th>
                                <th>FIFA Puskas: [{person["fifapuskas"]}]</th>
                                <th>Golden Boots: [{person["goldenboots"]}]</th>
                                <th>
                                  The Best FIFA Men’s Player: [
                                  {person["thebestfifamensplayer"]}]
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Players };
