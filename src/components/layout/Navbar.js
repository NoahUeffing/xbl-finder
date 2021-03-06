import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Friend Search</Link>
        </li>
        <li>
          <Link to="/myInfo">My Info</Link>
        </li>
        <li>
          <Link to="/myXboxOneGames">My Xbox One Games</Link>
        </li>
        <li>
          <Link to="/myXbox360Games">My Xbox 360 Games</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Aardvark Party's Xbox Companion",
  icon: "fab fa-xbox",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
