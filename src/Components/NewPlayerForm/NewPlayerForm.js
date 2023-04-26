import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { NavBar } from "../NavBar/NavBar"

export const NewPlayerForm = () => {
    
    const [players, setPlayers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        team: "",
        skillLevel: ""
        
    })

    const navigate = useNavigate()
    
    
    return <>   
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <img className="max-h-[675px] shadow-xl rounded-xl mt-12" src="https://c1.wallpaperflare.com/preview/443/273/189/billiards-table-bullet-game.jpg"></img>
      <h1  className="text-5xl font-bold pt-8">Cue'd Up</h1>
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
          <input type="text" placeholder=""  className="input input-bordered" value={players.firstName} 
          onChange={
            (evt) => setPlayers({...players, firstName: evt.target.value})
          } />
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" value={players.lastName} 
          onChange={
            (evt) => setPlayers({...players, lastName: evt.target.value})
            }/>
        </div>
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" value={players.email} 
          onChange={
            (evt) => setPlayers({...players, email: evt.target.value})
            }/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Team</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" value={players.team} 
          onChange={
            (evt) => setPlayers({...players, team: evt.target.value})
            }/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Skill Level</span>
          </label>
          <input type="text" placeholder="" className="input input-bordered" value={players.skillLevel} 
          onChange={
            (evt) => setPlayers({...players, skillLevel: evt.target.value})
            }/>
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>
        </fieldset>
        </form>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-2xl">Add player</button>
        </div>
      </div>
    </div>
  </div>
</div>

        

    
</> 
}


