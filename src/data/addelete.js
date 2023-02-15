import React, { useState, useCallback } from "react";
import "../stile.css";
import { people } from "./data";

const localStorage = window.localStorage;

const DataInput = () => {
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [img, setImg] = useState("");
  const [imgcard, setImgcard] = useState("");
  const [video, setVideo] = useState("");
  const [palmares, setPalmares] = useState("");
  const [goals, setGoals] = useState("");
  const [assists, setAssists] = useState("");
  const [minutesPlayed, setMinutesPlayed] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState("");
  const [substitutions, setSubstitutions] = useState("");

  const [jerseyNumber, setJerseyNumber] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = useCallback((e) => {
    setSelectedOption(e.target.value);
  }, []);

  const handleInputChange = useCallback(
    (e) => {
      switch (selectedOption) {
        case "name":
          setName(e.target.value);
          break;
        case "team":
          setTeam(e.target.value);
          break;

        case "jerseyNumber":
          setJerseyNumber(e.target.value);
          break;

        case "position":
          setPosition(e.target.value);
          break;

        case "img":
          setImg(e.target.value);
          break;

        case "imgcard":
          setImgcard(e.target.value);
          break;

        case "video":
          setVideo(e.target.value);
          break;

        case "palmares":
          setPalmares(e.target.value);
          break;

        case "goals":
          setGoals(e.target.value);
          break;

        case "assists":
          setAssists(e.target.value);
          break;

        case "minutesPlayed":
          setMinutesPlayed(e.target.value);
          break;

        case "gamesPlayed":
          setGamesPlayed(e.target.value);
          break;

        case "substitutions":
          setSubstitutions(e.target.value);
          break;
        default:
          break;
      }
    },
    [selectedOption]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      people.push({
        name,
        team,
        jerseyNumber,
        position,
        img,
        imgcard,
        video,
        palmares,
        goals,
        assists,
        minutesPlayed,
        gamesPlayed,
        substitutions,
      });
      localStorage.setItem("playermudi10", JSON.stringify(people));
      setName("");
      setTeam("");
      setJerseyNumber("");
      setPosition("");
      setImg("");
      setImgcard("");
      setVideo("");
      setPalmares("");
      setGoals("");
      setAssists("");
      setMinutesPlayed("");
      setGamesPlayed("");
      setSubstitutions("");
    },
    [
      name,
      team,
      jerseyNumber,
      position,
      img,
      imgcard,
      video,
      palmares,
      goals,
      assists,
      minutesPlayed,
      gamesPlayed,
      substitutions,
    ]
  );

  const handleDelete = useCallback((index) => {
    people.splice(index, 1);
    localStorage.setItem("playermudi10", JSON.stringify(people));
  }, []);

  return (
    <div className="add">
      <form className="playeradd" onSubmit={handleSubmit}>
        <select
          className="add"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="name">Name</option>
          <option value="team">Team</option>
          <option value="jerseyNumber">Jersey Number</option>
          <option value="position">Position</option>
          <option value="img">Img Players</option>
          <option value="imgcard">Img Card</option>
          <option value="video">Link Video YouTube</option>
          <option value="palmares">Link Palmares Transfermarkt</option>
          <option value="goals">Goals</option>
          <option value="assists">assists</option>
          <option value="minutesPlayed">Minutes Played</option>
          <option value="gamesPlayed">Games Played</option>
          <option value="substitutions">Substitutions</option>
        </select>
        <input
          className="add"
          type="text"
          placeholder={selectedOption ? selectedOption : "Write"}
          value={
            selectedOption === "name"
              ? name
              : selectedOption === "team"
              ? team
              : selectedOption === "jerseyNumber"
              ? jerseyNumber
              : selectedOption === "position"
              ? position
              : selectedOption === "img"
              ? img
              : selectedOption === "imgcard"
              ? imgcard
              : selectedOption === "video"
              ? video
              : selectedOption === "palmares"
              ? palmares
              : selectedOption === "goals"
              ? goals
              : selectedOption === "assists"
              ? assists
              : selectedOption === "minutesPlayed"
              ? minutesPlayed
              : selectedOption === "gamesPlayed"
              ? gamesPlayed
              : selectedOption === "substitutions"
              ? substitutions
              : ""
          }
          onChange={handleInputChange}
        />
        <button className="addplay" type="submit">Add</button>
      </form>

      <ul className="persdelete">
        {people.map((person, index) => (
          <li key={index}>
            {person.name} - {person.team} - {person.jerseyNumber}
            <button className="button2" onClick={() => handleDelete(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataInput;
