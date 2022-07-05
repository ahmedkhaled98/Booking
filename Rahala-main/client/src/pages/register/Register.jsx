import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
    phone:undefined,
    email:undefined,
    city:undefined,
    country:undefined
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };


  return (
    <div className="container-fluid">
    <div className="row">
    <Navbar />
    <div className="register mt-sm-0">
       
     
      <div className="lContainer">
       <label>Username:</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
         <label>Email:</label>
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
         <label>Phone number:</label>
        <input
          type="text"
          placeholder="Phone number"
          id="phone"
          onChange={handleChange}
          className="lInput"
        />
         <label>Password:</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        /> 
        <label>City:</label>
        <input
          type="text"
          placeholder="City"
          id="city"
          onChange={handleChange}
          className="lInput"
        /> 
        <label>Country:</label>
        <input
          type="text"
          placeholder="Country"
          id="country"
          onChange={handleChange}
          className="lInput"
        /> 
        <button disabled={loading} onClick={handleClick} className="lButton mx-auto mt-3">
         Sign Up
        </button>
        {error && <span>{error.message}</span>}
      </div>
     
    </div>

     
    </div>
    </div>
  );
};

export default Register;
