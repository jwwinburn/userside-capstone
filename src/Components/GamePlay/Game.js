import { Fragment, useEffect, useState } from "react";
import { ScoreKeeper } from "./ScoreKeeper";

export const Game = () => {
  // some state variables for team and player selection
  const [team1, setTeam1] = useState(null);
  const [team2, setTeam2] = useState(null);
  const [players, setPlayers] = useState([]);
  const [currentPlayer1, setCurrentPlayer1] = useState({});
  const [currentPlayer2, setCurrentPlayer2] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8080/teams?_embed=players`)
      .then((response) => response.json())
      .then((teamArray) => {
        setPlayers(teamArray);
      });
  }, []);
  const selectTeamOne = (player) => {
    fetch(`http://localhost:8080/teams/${player}?_embed=players`)
      .then((response) => response.json())
      .then((team1Array) => {
        setTeam1(team1Array);
      });
  };
  const selectTeamTwo = (player) => {
    fetch(`http://localhost:8080/teams/${player}?_embed=players`)
      .then((response) => response.json())
      .then((team2Array) => {
        setTeam2(team2Array);
      });
  };
  const capturingCurrentPlayer1 = (player) => {
    fetch(`http://localhost:8080/players/${player}`)
      .then((response) => response.json())
      .then((capturedPlayerObject) => {
        setCurrentPlayer1(capturedPlayerObject);
      });
  };
  const capturingCurrentPlayer2 = (player) => {
    fetch(`http://localhost:8080/players/${player}`)
      .then((response) => response.json())
      .then((capturedPlayerObject1) => {
        setCurrentPlayer2(capturedPlayerObject1);
      });
  };

  <ScoreKeeper currentPlayer1={currentPlayer1} currentPlayer2={currentPlayer2} />;
  return (
    <div className="flex justify-between px-64 pt-24">
      <div className="card w-96 bg-neutral shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Team 1</h2>
          <select
            onChange={(evt) => {
              selectTeamOne(evt.target.value);
            }}
          >
            <option value={null}>Select Team 1</option>
            {players.map((player) => (
              <Fragment key={player.id}>
                <option value={player.id}>{player.team}</option>
              </Fragment>
            ))}
          </select>
          {team1 && (
            <select
              onChange={(evt) => {
                console.log(evt.target.value);
                capturingCurrentPlayer1(evt.target.value);
              }}
            >
              <option value={null}>Select Player</option>
              {team1.players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.firstName} {player.lastName}
                </option>
              ))}
            </select>
          )}
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-between">
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Short Bank</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Medium Bank</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Long Bank</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Short Cut</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Medium Cut</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Long Cut</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Straight</p>
            <button className="btn btn-warning">Missed It!</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-neutral shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Team 2</h2>
          <select
            onChange={(evt) => {
              selectTeamTwo(evt.target.value);
            }}
          >
            <option value={null}>Select Team 2</option>
            {players.map((player) => (
              <Fragment key={player.id}>
                <option value={player.id}>{player.team}</option>
              </Fragment>
            ))}
          </select>
          {team2 && (
            <select
              onChange={(evt) => {
                console.log(evt.target.value);
                capturingCurrentPlayer2(evt.target.value);
              }}
            >
              <option value={null}>Select Player</option>
              {team2.players.map((player) => (
                <option key={player.id} value={player.id}>
                  {player.firstName} {player.lastName}
                </option>
              ))}
            </select>
          )}
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className="card-actions justify-between">
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Short Bank</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Medium Bank</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Long Bank</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Short Cut</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Medium Cut</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Long Cut</p>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <p className="text-center pt-3">Straight</p>
            <button className="btn btn-warning">Missed It!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

// I want two cards to be displayed on the page on the left and right side.
// The cards need to have a dropdown menu at the top of the page to select teams.
// After team is selected there needs to be another dropdown menu at the top of the page to select players.
// Below that the shot type will be in the center of the card and make or miss buttons will be to the left and right.

//I need to have
