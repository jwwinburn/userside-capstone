import { Outlet, Route, Routes } from "react-router-dom"
import { Teams } from "./Components/NewPlayerForm/Teams";
import { NewPlayerForm } from "./Components/NewPlayerForm/NewPlayerForm";
import { NavBar } from "./Components/NavBar/NavBar";
import { Game } from "./Components/GamePlay/Game";
import { StartGame } from "./Components/GamePlay/StartGame";


export const ApplicationViews = () => {
  const user = localStorage.getItem("user");
  const userObject = JSON.parse(user);

  return (
    <Routes>
        <Route path="/" element={
            <>
                <NavBar />
                <Outlet />
            </>
        }>

            <Route path="/" element={<StartGame />} />
            <Route path="teams" element={ <Teams /> } />
            <Route path="addplayer" element={ <NewPlayerForm /> } />
            <Route path="game" element={ <Game /> } />
        </Route>
    </Routes>
)
};
