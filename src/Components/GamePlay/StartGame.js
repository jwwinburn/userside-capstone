import { Link } from "react-router-dom"

export const StartGame = () => {
    
return (
<div className="hero min-h-screen" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2020/08/15/03/19/billiards-5489526_1280.jpg")` }}>
  <div className="hero-overlay bg-opacity-75"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Welcome to Cue'd Up</h1>
      <p className="mb-5"></p>
      <button className="btn btn-primary"><Link to={"/game"}>Start Game</Link></button>
    </div>
  </div>
</div>

)}