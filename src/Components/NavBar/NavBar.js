import { Link, useNavigate  } from "react-router-dom"
export const NavBar = () => {
    const navigate = useNavigate()
    return <>
    
    <div className="navbar bg-neutral">
  <div className="flex-1">
    <li className="btn btn-ghost normal-case text-xl"><Link to="/#">Cue'd Up</Link></li>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/login">Login</Link></li>
      <li tabIndex={0}>
        <a>
          menu
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <li><Link to="/addplayer">Add Player</Link></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      {
                localStorage.getItem("user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
      <li><Link to="/teams">Teams</Link></li>
    </ul>
  </div>
</div>
    </>
}