import React, { useState } from "react";
import MalText from "../assets/Malhaartext.jpg";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="nav">
      <p className="malhaar">
        <img src={MalText} alt="text" />
      </p>

      {/* <FontAwesomeIcon icon="fa-light fa-bars" beat style={{color: "#9a37c8",}} /> */}

      {isNavOpen ? (
        <div className="bar" onClick={toggleNav}>
        
          <FaBars />
        </div>
      ) : (
        <div className="nav-buttons ">
          <button>Home</button>
          <button>Tickets</button>
          <button>Schedule</button>
          <button>Sponsors</button>
          <button>Team</button>
          <button>About</button>
        </div>
      )}

      <div className="Register">
        <button>Register Now</button>
      </div>
    </div>
  );
};

export default Navbar;
