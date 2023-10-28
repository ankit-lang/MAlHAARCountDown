import React from 'react';
import MalText from "../assets/Malhaartext.jpg";
const Navbar = () => {
  return (
    <div className='nav'>
      
      <p className='malhaar'><img src={MalText} alt="text" /></p>
      
      <div className='nav-buttons'>
        <button>Home</button>
        <button>Tickets</button>
        <button>Schedule</button>
        <button>Sponsors</button>
        <button>Team</button>
        <button>About</button>
      </div>
      <div className='Register'>
        <button>Register Now</button>
      </div>
    </div>
  )
}

export default Navbar
