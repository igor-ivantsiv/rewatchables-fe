import {
  IconDeviceTv,
  IconHome,
  IconMovie,
  IconQuestionMark,
  IconSearch,
  IconUserHeart,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ navbarSmall }) => {
  const location = useLocation();
  return (
    <>
      <section className="navbar">

        <div className="menu">
          {navbarSmall ? (
            <>
              <Link className={location.pathname === "/" ? "active" : ""} to="/" >
                <div className="navbarIconDiv">
                  <IconHome size={30} className="navbarIcon" />
                </div>
              </Link>
              <Link className={location.pathname === "/movies" ? "active" : ""} to="/movies">
                <div className="navbarIconDiv">
                  <IconMovie size={30} className="navbarIcon" />
                </div>
              </Link>
              <Link className={location.pathname === "/series" ? "active" : ""} to="/series">
                <div className="navbarIconDiv">
                  <IconDeviceTv size={30} className="navbarIcon" />
                </div>
              </Link>
              <Link className={location.pathname === "/search" ? "active" : ""} to="/search">
                <div className="navbarIconDiv">
                  <IconSearch size={30} className="navbarIcon" />
                </div>
              </Link>
              <Link className={location.pathname === "/suggestions" ? "active" : ""} to="/suggestions">
                <div className="navbarIconDiv">
                  <IconQuestionMark size={30} className="navbarIcon" />
                </div>
              </Link>
              <Link className={location.pathname === "/about" ? "active" : ""} to="/about">
                <div className="navbarIconDiv">
                  <IconUserHeart size={30} className="navbarIcon" />
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link className={location.pathname === "/" ? "active" : ""} to="/" >
              <div className="menuItem"><IconHome size={30} className="navbarIcon" /><p className="menuText">Home</p></div>
              </Link>
              <Link className={location.pathname === "/movies" ? "active" : ""} to="/movies">
                <div className="menuItem"><IconMovie size={30} className="navbarIcon" /><p className="menuText">Movies</p></div>
              </Link>
              <Link className={location.pathname === "/series" ? "active" : ""} to="/series">
                <div className="menuItem"><IconDeviceTv size={30} className="navbarIcon" /><p className="menuText">Series</p></div>
              </Link>
              <Link className={location.pathname === "/search" ? "active" : ""} to="/search">
                <div className="menuItem"><IconSearch  size={30} className="navbarIcon" /><p className="menuText">Search</p></div>
              </Link>
              <Link className={location.pathname === "/suggestions" ? "active" : ""} to="/suggestions">
                <div className="menuItem"><IconQuestionMark  size={30} className="navbarIcon" /><p className="menuText">Suggestion</p></div>
              </Link>
              <Link className={location.pathname === "/about" ? "active" : ""} to="/about">
                <div className="menuItem"><IconUserHeart size={30} className="navbarIcon" /><p className="menuText">About Us</p></div>
              </Link>
            </>
          )}
        </div>

      </section>
    </>
  );
};

export default Navbar;
