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

  const pushTalliedShotsTeam2 = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer2.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer2,
          madeShortBank: madeShot,
          takenShortBank: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer2(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam2mb = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer2.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer2,
          madeMediumBank: madeShot,
          takenMediumBank: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer2(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  
  
  const tallyFunctionsTeam2 = (madeShot, takenShot, shotResults) => {
    // console.log(madeShot,takenShot, shotResults);
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      console.log(madeShot,takenShot);
      pushTalliedShotsTeam2(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam2mb = (madeShot, takenShot, shotResults) => {
    // console.log(madeShot,takenShot, shotResults);
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2mb(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      console.log(madeShot,takenShot);
      pushTalliedShotsTeam2mb(updatedMadeShot,updatedTakenShot)
    }
  }

  const percentageFormula = (takenShot, madeShot) => {
    console.log(madeShot, takenShot );
    let total = madeShot/takenShot
    return Math.floor((total * 100))
  }

  <ScoreKeeper
    currentPlayer1={currentPlayer1}
    currentPlayer2={currentPlayer2}
  />;
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
            <div className="pt-1">
              <p className="text-center">Short Bank</p>
              <p className="text-center">{currentPlayer1.madeShortBank}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <div className="pt-1">
              <p className="text-center">Medium Bank</p>
              <p className="text-center">{currentPlayer1.madeMediumBank}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <div className="pt-1">
              <p className="text-center">Long Bank</p>
              <p className="text-center">{currentPlayer1.madeLongBank}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <div className="pt-1">
              <p className="text-center">Short Cut</p>
              <p className="text-center">{currentPlayer1.madeShortCut}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <div className="pt-1">
              <p className="text-center">Medium Cut</p>
              <p className="text-center">{currentPlayer1.madeMediumCut}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <div className="pt-1">
              <p className="text-center">Long Cut</p>
              <p className="text-center">{currentPlayer1.madeLongCut}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button className="btn btn-accent">Made It!</button>
            <div className="pt-1">
              <p className="text-center">Straight</p>
              <p className="text-center">{currentPlayer1.madeStraight}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-neutral shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Team 2</h2>
          <select onChange={(evt) => {selectTeamTwo(evt.target.value)}}>
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
                capturingCurrentPlayer2(evt.target.value);
              }}>
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
            <button value={0}
              onClick={(click) => {
                const madeShotsb = click.target.value;
                tallyFunctionsTeam2(currentPlayer2.madeShortBank,currentPlayer2.takenShortBank, parseInt(madeShotsb));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Short Bank</p>
              <p className="text-center">{percentageFormula(currentPlayer2.takenShortBank, currentPlayer2.madeShortBank)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotsb = click.target.value;
                tallyFunctionsTeam2(currentPlayer2.madeShortBank,currentPlayer2.takenShortBank, parseInt(missedShotsb))
              }}
              className="btn btn-warning">Missed It!</button>
            
            
            
            <button value={0}
              onClick={(click) => {
                const madeShotmb = click.target.value;
                tallyFunctionsTeam2mb(currentPlayer2.madeMediumBank,currentPlayer2.takenMediumBank, parseInt(madeShotmb));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Medium Bank</p>
              <p className="text-center">{percentageFormula(currentPlayer2.takenMediumBank, currentPlayer2.madeMediumBank)}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button value={1}
              onClick={(click) => {
                const missedShotmb = click.target.value;
                tallyFunctionsTeam2mb(currentPlayer2.madeMediumBank,currentPlayer2.takenMediumBank, parseInt(missedShotmb))
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Long Bank</p>
              <p className="text-center">{currentPlayer2.madeLongBank}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button
              onClick={(click) => {
                const copy = { ...currentPlayer2 };
                copy.firstName = click.target.value;
                setCurrentPlayer2(copy);
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Short Cut</p>
              <p className="text-center">{currentPlayer1.madeShortCut}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button
              onClick={(click) => {
                const copy = { ...currentPlayer2 };
                copy.firstName = click.target.value;
                setCurrentPlayer2(copy);
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Medium Cut</p>
              <p className="text-center">{currentPlayer2.madeMediumCut}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button
              onClick={(click) => {
                const copy = { ...currentPlayer2 };
                copy.firstName = click.target.value;
                setCurrentPlayer2(copy);
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Long Cut</p>
              <p className="text-center">{currentPlayer2.madeLongCut}%</p>
            </div>
            <button className="btn btn-warning">Missed It!</button>
            <button
              onClick={(click) => {
                const copy = { ...currentPlayer2 };
                copy.firstName = click.target.value;
                setCurrentPlayer2(copy);
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Straight</p>
              <p className="text-center">{currentPlayer2.madeStraight}%</p>
            </div>
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
