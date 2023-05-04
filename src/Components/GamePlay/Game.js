import { Fragment, useEffect, useState } from "react";
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
  const pushTalliedShotsTeam2lb = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer2.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer2,
          madeLongBank: madeShot,
          takenLongBank: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer2(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam2sc = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer2.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer2,
          madeShortCut: madeShot,
          takenShortCut: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer2(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam2mc = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer2.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer2,
          madeMediumCut: madeShot,
          takenMediumCut: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer2(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam2lc = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer2.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer2,
          madeLongCut: madeShot,
          takenLongCut: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer2(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam2s = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer2.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer2,
          madeStraight: madeShot,
          takenStraight: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer2(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  
  
  const tallyFunctionsTeam2 = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam2mb = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2mb(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2mb(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam2lb = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2lb(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2lb(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam2sc = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2sc(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2sc(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam2mc = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2mc(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2mc(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam2lc = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2lc(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2lc(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam2s = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2s(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam2s(updatedMadeShot,updatedTakenShot)
    }
  }
  const pushTalliedShotsTeam1 = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer1.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer1,
          madeShortBank: madeShot,
          takenShortBank: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer1(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam1mb = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer1.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer1,
          madeMediumBank: madeShot,
          takenMediumBank: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer1(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam1lb = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer1.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer1,
          madeLongBank: madeShot,
          takenLongBank: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer1(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam1sc = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer1.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer1,
          madeShortCut: madeShot,
          takenShortCut: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer1(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam1mc = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer1.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer1,
          madeMediumCut: madeShot,
          takenMediumCut: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer1(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam1lc = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer1.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer1,
          madeLongCut: madeShot,
          takenLongCut: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer1(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  const pushTalliedShotsTeam1s = async (madeShot, takenShot) => {
    try {
      const response = await fetch(`http://localhost:8080/players/${currentPlayer1.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...currentPlayer1,
          madeStraight: madeShot,
          takenStraight: takenShot
        }),
      });
  
      const updatedPlayer = await response.json();
      capturingCurrentPlayer1(updatedPlayer.id);
  
    } catch (error) {
      console.error("Error updating shots:", error);
    }
  };
  
  
  const tallyFunctionsTeam1 = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam1mb = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1mb(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1mb(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam1lb = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1lb(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1lb(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam1sc = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1sc(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1sc(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam1mc = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1mc(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1mc(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam1lc = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1lc(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1lc(updatedMadeShot,updatedTakenShot)
    }
  }
  const tallyFunctionsTeam1s = (madeShot, takenShot, shotResults) => {
    if (shotResults === 0) {
      const updatedMadeShot= madeShot + 1;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1s(updatedMadeShot,updatedTakenShot)
    }else {
      const updatedMadeShot= madeShot;
      const updatedTakenShot = takenShot + 1;
      pushTalliedShotsTeam1s(updatedMadeShot,updatedTakenShot)
    }
  }

  const percentageFormula = (takenShot, madeShot) => {
    let total = madeShot/takenShot
    return Math.floor((total * 100))
  }

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
          <button value={0}
              onClick={(click) => {
                const madeShotsb = click.target.value;
                tallyFunctionsTeam1(currentPlayer1.madeShortBank,currentPlayer1.takenShortBank, parseInt(madeShotsb));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Short Bank</p>
              <p className="text-center">{percentageFormula(currentPlayer1.takenShortBank, currentPlayer1.madeShortBank)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotsb = click.target.value;
                tallyFunctionsTeam1(currentPlayer1.madeShortBank,currentPlayer1.takenShortBank, parseInt(missedShotsb))
              }}
              className="btn btn-warning">Missed It!</button>
            
            
            
            <button value={0}
              onClick={(click) => {
                const madeShotmb = click.target.value;
                tallyFunctionsTeam1mb(currentPlayer1.madeMediumBank,currentPlayer1.takenMediumBank, parseInt(madeShotmb));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Medium Bank</p>
              <p className="text-center">{percentageFormula(currentPlayer1.takenMediumBank, currentPlayer1.madeMediumBank)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotmb = click.target.value;
                tallyFunctionsTeam1mb(currentPlayer1.madeMediumBank,currentPlayer1.takenMediumBank, parseInt(missedShotmb))
              }} className="btn btn-warning">Missed It!</button>
            
            
            
            <button value={0}
              onClick={(click) => {
                const madeShotlb = click.target.value;
                tallyFunctionsTeam1lb(currentPlayer1.madeLongBank,currentPlayer1.takenLongBank, parseInt(madeShotlb));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Long Bank</p>
              <p className="text-center">{percentageFormula(currentPlayer1.takenLongBank, currentPlayer1.madeLongBank)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotlb = click.target.value;
                tallyFunctionsTeam1lb(currentPlayer1.madeLongBank,currentPlayer1.takenLongBank, parseInt(missedShotlb))
              }} className="btn btn-warning">Missed It!</button>
            
            
            
            <button value={0}
              onClick={(click) => {
                const madeShotsc = click.target.value;
                tallyFunctionsTeam1sc(currentPlayer1.madeShortCut,currentPlayer1.takenShortCut, parseInt(madeShotsc));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Short Cut</p>
              <p className="text-center">{percentageFormula(currentPlayer1.takenShortCut, currentPlayer1.madeShortCut)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotsc = click.target.value;
                tallyFunctionsTeam1sc(currentPlayer1.madeShortCut,currentPlayer1.takenShortCut, parseInt(missedShotsc))
              }} className="btn btn-warning">Missed It!</button>
            
            
            
            
            <button value={0}
              onClick={(click) => {
                const madeShotmc = click.target.value;
                tallyFunctionsTeam1mc(currentPlayer1.madeMediumCut,currentPlayer1.takenMediumCut, parseInt(madeShotmc));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Medium Cut</p>
              <p className="text-center">{percentageFormula(currentPlayer1.takenMediumCut, currentPlayer1.madeMediumCut)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotmc = click.target.value;
                tallyFunctionsTeam1mc(currentPlayer1.madeMediumCut,currentPlayer1.takenMediumCut, parseInt(missedShotmc))
              }} className="btn btn-warning">Missed It!</button>
            <button value={0}
              onClick={(click) => {
                const madeShotlc = click.target.value;
                tallyFunctionsTeam1lc(currentPlayer1.madeLongCut,currentPlayer1.takenLongCut, parseInt(madeShotlc));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Long Cut</p>
              <p className="text-center">{percentageFormula(currentPlayer1.takenLongCut, currentPlayer1.madeLongCut)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotlc = click.target.value;
                tallyFunctionsTeam1lc(currentPlayer1.madeLongCut,currentPlayer1.takenLongCut, parseInt(missedShotlc))
              }} className="btn btn-warning">Missed It!</button>
            <button value={0}
              onClick={(click) => {
                const madeShots = click.target.value;
                tallyFunctionsTeam1s(currentPlayer1.madeStraight,currentPlayer1.takenStraight, parseInt(madeShots));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Straight</p>
              <p className="text-center">{percentageFormula(currentPlayer1.takenStraight, currentPlayer1.madeStraight)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShots = click.target.value;
                tallyFunctionsTeam1s(currentPlayer1.madeStraight,currentPlayer1.takenStraight, parseInt(missedShots))
              }} className="btn btn-warning">Missed It!</button>
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
            <button value={1}
              onClick={(click) => {
                const missedShotmb = click.target.value;
                tallyFunctionsTeam2mb(currentPlayer2.madeMediumBank,currentPlayer2.takenMediumBank, parseInt(missedShotmb))
              }} className="btn btn-warning">Missed It!</button>
            
            
            
            <button value={0}
              onClick={(click) => {
                const madeShotlb = click.target.value;
                tallyFunctionsTeam2lb(currentPlayer2.madeLongBank,currentPlayer2.takenLongBank, parseInt(madeShotlb));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Long Bank</p>
              <p className="text-center">{percentageFormula(currentPlayer2.takenLongBank, currentPlayer2.madeLongBank)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotlb = click.target.value;
                tallyFunctionsTeam2lb(currentPlayer2.madeLongBank,currentPlayer2.takenLongBank, parseInt(missedShotlb))
              }} className="btn btn-warning">Missed It!</button>
            
            
            
            <button value={0}
              onClick={(click) => {
                const madeShotsc = click.target.value;
                tallyFunctionsTeam2sc(currentPlayer2.madeShortCut,currentPlayer2.takenShortCut, parseInt(madeShotsc));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Short Cut</p>
              <p className="text-center">{percentageFormula(currentPlayer2.takenShortCut, currentPlayer2.madeShortCut)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotsc = click.target.value;
                tallyFunctionsTeam2sc(currentPlayer2.madeShortCut,currentPlayer2.takenShortCut, parseInt(missedShotsc))
              }} className="btn btn-warning">Missed It!</button>
            
            
            
            
            <button value={0}
              onClick={(click) => {
                const madeShotmc = click.target.value;
                tallyFunctionsTeam2mc(currentPlayer2.madeMediumCut,currentPlayer2.takenMediumCut, parseInt(madeShotmc));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Medium Cut</p>
              <p className="text-center">{percentageFormula(currentPlayer2.takenMediumCut, currentPlayer2.madeMediumCut)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotmc = click.target.value;
                tallyFunctionsTeam2mc(currentPlayer2.madeMediumCut,currentPlayer2.takenMediumCut, parseInt(missedShotmc))
              }} className="btn btn-warning">Missed It!</button>
            <button value={0}
              onClick={(click) => {
                const madeShotlc = click.target.value;
                tallyFunctionsTeam2lc(currentPlayer2.madeLongCut,currentPlayer2.takenLongCut, parseInt(madeShotlc));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Long Cut</p>
              <p className="text-center">{percentageFormula(currentPlayer2.takenLongCut, currentPlayer2.madeLongCut)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShotlc = click.target.value;
                tallyFunctionsTeam2lc(currentPlayer2.madeLongCut,currentPlayer2.takenLongCut, parseInt(missedShotlc))
              }} className="btn btn-warning">Missed It!</button>
            <button value={0}
              onClick={(click) => {
                const madeShots = click.target.value;
                tallyFunctionsTeam2s(currentPlayer2.madeStraight,currentPlayer2.takenStraight, parseInt(madeShots));
              }}
              className="btn btn-accent">
              Made It!</button>
            <div className="pt-1">
              <p className="text-center">Straight</p>
              <p className="text-center">{percentageFormula(currentPlayer2.takenStraight, currentPlayer2.madeStraight)}%</p>
            </div>
            <button value={1}
              onClick={(click) => {
                const missedShots = click.target.value;
                tallyFunctionsTeam2s(currentPlayer2.madeStraight,currentPlayer2.takenStraight, parseInt(missedShots))
              }} className="btn btn-warning">Missed It!</button>
            
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
