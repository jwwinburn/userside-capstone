import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";

export const NewUserForm = () => {
  const [players, setPlayers] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    email: ""
  });

  const navigate = useNavigate();

  const localUser = localStorage.getItem("user");
  const userObject = JSON.parse(localUser);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userToSendToAPI = {
      "firstName": players.firstName,
      "lastName": players.lastName,
      "email": players.email,
    };

    return fetch(`http://localhost:8080/users`,{
  method: "POST",
  headers: {"Content-Type": "application/json"
  },
  body: JSON.stringify(userToSendToAPI)
})
  .then((response) => response.json())
  .then((newPlayer) => {
    console.log('newPlayer:', newPlayer);
    navigate("/");
  });

  };
  return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img
              className="max-h-[675px] shadow-xl rounded-xl mt-24"
              src="https://c1.wallpaperflare.com/preview/443/273/189/billiards-table-bullet-game.jpg"
            ></img>
            <h1 className="text-5xl font-bold pt-8">Cue'd Up</h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                      value={players.firstName}
                      onChange={
                        (evt) => {
                        const copy = {...players}
                        copy.firstName = evt.target.value
                        setPlayers(copy)
                        }
                      }
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
                      value={players.lastName}
                      onChange={
                        (evt) => {
                        const copy = {...players}
                        copy.lastName = evt.target.value
                        setPlayers(copy)
                        }
                      }
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
                      value={players.email}
                      onChange={
                        (evt) => {
                        const copy = {...players}
                        copy.email = evt.target.value
                        setPlayers(copy)
                        }
                      }
                    />
                  </div>
                </fieldset>
              </form>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-2xl"
                onClick={(clickEvent) => handleSubmit(clickEvent)}
                type="button">
                create user</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
