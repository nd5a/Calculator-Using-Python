import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../Sidebar/Sidebar.css"; // Import Sidebar Styles
import { AuthContext } from "../../context/AuthContext";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toggleSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleSidebar}>✖ Close</button>
      <div className="sidebar-content">
        {user ? (
          <>
            <p><strong>{user.username}</strong></p>
            <p>{user.email}</p>
            <li><Link to="/profile" onClick={toggleSidebar}>Profile</Link></li>
            <li><Link to="/my-bookings" onClick={toggleSidebar}>My Bookings</Link></li>
            <li><Link to="/wishlist"><FaHeart /> Wishlist</Link></li>
            <li><Link to="/support"><FaQuestionCircle /> Support</Link></li>
            <li><Link to="/itinerary"><FaCog /> Travel Itineraries</Link></li>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={toggleSidebar}>Login</Link>
            <Link to="/register" onClick={toggleSidebar}>Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
