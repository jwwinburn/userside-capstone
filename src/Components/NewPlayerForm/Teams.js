import { useEffect, useState, React, Fragment } from "react";
import "./Teams.css";
import { PlayerForm } from "../Profile/PlayerForm";

export const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(false);
  const [alternateView, setAlternateView] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:8080/teams?_embed=players`)
      .then((response) => response.json())
      .then((teamArray) => {
        setTeams(teamArray);
      });
  }, []);

const getTeams = () => {
  return fetch(`http://localhost:8080/teams?_embed=players`)
      .then((response) => response.json())
      .then((teamArray) => {
        setTeams(teamArray);
      });
}

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
    setShowModal(true);

    const handleAlternateView = () => {
      // implement logic for alternate view
    };
    // render alternate view based on the value of alternateView state

    <div>
      <button onClick={handleAlternateView}>View Alternate</button>
    </div>;
  };

  const percentageFormula = (takenShot, madeShot) => {
    console.log(madeShot, takenShot );
    let total = madeShot/takenShot
    return Math.floor((total * 100))
  }

  return (
    <div className ="flex flex-wrap justify-around pt-20">
      {teams.map(({ ...team }) => (
        <Fragment key={team.id}>
          <div className="flex justify-around pt-10">
            <div className="card w-56 bg-neutral text-neutral-content shadow-2xl">
              <div className="card-body">
                <h2 className="card-title">{team.team}</h2>
                <ul>
                  {team.players.map((player) => (
                    <label
                      htmlFor="my-modal"
                      key={player.id}
                      className="cursor-pointer"
                    >
                      <li onClick={() => handlePlayerClick(player)}>
                        {player.firstName}
                      </li>
                    </label>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Fragment>
      ))}
      {showModal && selectedPlayer && (
        <Fragment>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box shadow-2xl">
              <h3 className="font-bold text-lg text-center">
                {selectedPlayer.firstName} {selectedPlayer.lastName}
              </h3>
              {alternateView ? (
                <div>
                  <PlayerForm selectedPlayer={selectedPlayer} getTeams={getTeams} setSelectedPlayer={setSelectedPlayer} setShowModal = {setShowModal} />
                </div>
              ) : (
                <div>
                  <h4 className="pb-3 text-center">
                    Skill Level: {selectedPlayer.skillLevel}
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="table w-full">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Shot Type</th>
                          <th>%</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>Short Banks</th>
                          <td>{percentageFormula(selectedPlayer.takenShortBank, selectedPlayer.madeShortBank)}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>Medium Banks</th>
                          <td>{percentageFormula(selectedPlayer.takenMediumBank, selectedPlayer.madeMediumBank)}</td>
                        </tr>
                        <tr>
                          <th>Long Banks</th>
                          <td>{percentageFormula(selectedPlayer.takenLongBank, selectedPlayer.madeLongBank)}</td>
                        </tr>
                        <tr>
                          <th>Short Cut</th>
                          <td>{percentageFormula(selectedPlayer.takenShortCut, selectedPlayer.madeShortCut)}</td>
                        </tr>
                        <tr>
                          <th>Medium Cut</th>
                          <td>{percentageFormula(selectedPlayer.takenMediumCut, selectedPlayer.madeMediumCut)}</td>
                        </tr>
                        <tr>
                          <th>Long Cut</th>
                          <td>{percentageFormula(selectedPlayer.takenLongCut, selectedPlayer.madeLongCut)}</td>
                        </tr>
                        <tr>
                          <th>Straight</th>
                          <td>{percentageFormula(selectedPlayer.takenStraight, selectedPlayer.madeStraight)}</td>
                        </tr>
                        {/* row 3 */}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              <div className="modal-action">
                <label
                  htmlFor="my-modal"
                  className="btn"
                  onClick={() => setShowModal(false)}
                >
                  Done
                </label>
                <button
                  onClick={(handleAlternateView) =>
                    setAlternateView(!alternateView)
                  }
                >
                  Edit Player
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};
