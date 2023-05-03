import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { Teams } from "../NewPlayerForm/Teams";

export const PlayerForm = ({ selectedPlayer, getTeams, setSelectedPlayer }) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/players/${selectedPlayer.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(selectedPlayer),
    })
      .then((response) => response.json())
      .then(getTeams);
  };

  const deletePlayer = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/players/${selectedPlayer.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getTeams);
  };
  return (
    <>
      <div className="hero min-h-fit bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-5xl font-bold pt-8">Cue'd Up</h1> */}
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full shadow-sm bg-base-100">
            <div className="card-body">
              <form>
                <fieldset>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      defaultValue={selectedPlayer.firstName}
                      onChange={(evt) => {
                        const copy = { ...selectedPlayer };
                        copy.firstName = evt.target.value;
                        setSelectedPlayer(copy);
                      }}
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      value={selectedPlayer.lastName}
                      onChange={(evt) => {
                        const copy = { ...selectedPlayer };
                        copy.lastName = evt.target.value;
                        setSelectedPlayer(copy);
                      }}
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      value={selectedPlayer.email}
                      onChange={(evt) => {
                        const copy = { ...selectedPlayer };
                        copy.email = evt.target.value;
                        setSelectedPlayer(copy);
                      }}
                    />
                  </div>
                </fieldset>

                <fieldset>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Team</span>
                    </label>
                    <select
                      className="select w-full max-w-xs select-bordered"
                      value={selectedPlayer.teamId}
                      onChange={(evt) => {
                        const copy = { ...selectedPlayer };
                        copy.teamId = evt.target.value;
                        setSelectedPlayer(copy);
                      }}
                    >
                      <option value={null}></option>
                      <option value={1}>It's Your Rack</option>
                      <option value={2}>Cutting Corners</option>
                      <option value={3}>Miscued</option>
                      <option value={4}>DOA (AKA No Mercy)</option>
                      <option value={5}>Froggy & Jeffros</option>
                      <option value={6}>Chalking It Up</option>
                    </select>
                  </div>
                </fieldset>

                <fieldset>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Skill Level</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="input input-bordered"
                      value={selectedPlayer.skillLevel}
                      onChange={(evt) => {
                        const copy = { ...selectedPlayer };
                        copy.skillLevel = parseInt(evt.target.value);
                        setSelectedPlayer(copy);
                      }}
                    />
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary text-2xl"
                onClick={(clickEvent) => handleSubmit(clickEvent)}
              >
                Finalize Edit
              </button>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary text-2xl"
                onClick={(clickEvent) => deletePlayer(clickEvent)}
              >
                Delete Player
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
