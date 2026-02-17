import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        
        <div className="college-info">
          <img 
            src="https://jcedandegaon.org/wp-content/uploads/2025/02/cropped-WhatsApp-Image-2025-02-17-at-20.02.05_9d9e19b6.jpg" 
            alt="logo" 
          />
          <h2>Junior College of Education Dandegaon</h2>
          <p>Dist - Gondia (Maharashtra)</p>
        </div>

        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/student-corner" className={({ isActive }) => isActive ? "active" : ""}>
              Student Corner
            </NavLink>
          </li>

          <li>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? "active" : ""}>
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink to="/college-staff" className={({ isActive }) => isActive ? "active" : ""}>
              College Staff
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Sliding Text Below Navbar */}
      <div className="top-marquee">
  <div className="marquee-track">
    <span>
      SHRI SAMRATH EDUCATION SOCIETY DANDEGAON – NCTE CODE- 112171 , MSCE CODE – 7302
    </span>
    <span>
      SHRI SAMRATH EDUCATION SOCIETY DANDEGAON – NCTE CODE- 112171 , MSCE CODE – 7302
    </span>
    <span>
      SHRI SAMRATH EDUCATION SOCIETY DANDEGAON – NCTE CODE- 112171 , MSCE CODE – 7302
    </span>
    <span>
      SHRI SAMRATH EDUCATION SOCIETY DANDEGAON – NCTE CODE- 112171 , MSCE CODE – 7302
    </span>
    <span>
      SHRI SAMRATH EDUCATION SOCIETY DANDEGAON – NCTE CODE- 112171 , MSCE CODE – 7302
    </span>
  </div>
</div>

    </>
  );
};

export default Navbar;
