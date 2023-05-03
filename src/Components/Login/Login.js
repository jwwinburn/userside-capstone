import { useNavigate } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("jerrywwinburn@gmail.com");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    
    fetch(`http://localhost:8080/user?email=${email}`)
      .then((response) => response.json())
      .then((foundUsers) => {
        if (foundUsers.length === 1) {
          const user = foundUsers[0];
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: user.id,
            })
          );
          navigate("/");
        } else {
          window.alert("User not found");
        }
      });
  };
  return (
    <>
      <form className="form--login" onSubmit={handleLogin}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Take control of your game</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                
            <div className="card-body">
              <div className="form-control">
                <fieldset>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(evt) => setEmail(evt.target.value)}
                  className="input input-bordered min-w-full"
                  placeholder="Email Address"
                  required autoFocus
                  />
                  </fieldset>
              </div>
              <div className="form-control">
              
                {/* <label className="label">
            <span className="label-text">Password</span>
            </label>
        <input type="text" placeholder="password" className="input input-bordered" /> */}
                {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </>
  );
};
