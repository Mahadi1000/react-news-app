import { Link, NavLink } from "react-router-dom";
import avater from "../../assets/user.png"
const Navbar = () => {

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/career">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
    <div className="navbar-start">
    
     
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {navLinks}
      </ul>
    </div>
    <div className="navbar-end flex">
    <div className="flex gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src={avater} />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link to={'/dashboard/dashboard-home'} className="justify-between">
            Dashboard
            <span className="badge">New</span>
          </Link>
        </li>
        
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
    </div>
  </div></div>
  )
}

export default Navbar