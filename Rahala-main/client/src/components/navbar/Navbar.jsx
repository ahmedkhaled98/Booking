import "./navbar.css";
import { Link ,useNavigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const logout = () => {    localStorage.removeItem('user'); window.location.href = '/';  };
  useEffect(() => { 
    
  } , [user]);
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Rahala</span>
        </Link>
        {user ? <div>{user.username}  <button className="navButton" onClick={logout}>Logout</button></div>: (
          <div className="navItems">
            <Link to="/register" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Register</button>
            </Link>
            <Link to="/login" style={{ color: "inherit", textDecoration: "none" }}>
            <button className="navButton">Login</button>
            </Link>
          </div>
        )}
       
      </div>
    </div>
  );
};

export default Navbar;
