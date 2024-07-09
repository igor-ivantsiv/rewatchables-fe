import {
  IconDeviceTv,
  IconHome,
  IconMovie,
  IconQuestionMark,
  IconUserHeart,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Navbar = ({ navbarSmall }) => {
  return (
    <>
      <section className="navbar">

        <div className="menu">
          {navbarSmall ? (
            <>
              <Link className="links" to="/">
                <div className="navbarIconDiv">
                  <IconHome size={32} className="navbarIcon" />
                </div>
              </Link>
              <Link className="links" to="/movies">
                <div className="navbarIconDiv">
                  <IconMovie size={32} className="navbarIcon" />
                </div>
              </Link>
              <Link className="links" to="/series">
                <div className="navbarIconDiv">
                  <IconDeviceTv size={32} className="navbarIcon" />
                </div>
              </Link>
              <Link className="links" to="/suggestions">
                <div className="navbarIconDiv">
                  <IconQuestionMark size={32} className="navbarIcon" />
                </div>
              </Link>
              <Link className="links" to="/About">
                <div className="navbarIconDiv">
                  <IconUserHeart size={32} className="navbarIcon" />
                </div>
              </Link>
            </>
          ) : (
            <>
              <Link className="links" to="/">
                <div className="menuItem"><IconHome size={32} className="navbarIcon" /><p className="menuText">Home</p></div>
              </Link>
              <Link className="links" to="/movies">
                <div className="menuItem"><IconMovie size={32} className="navbarIcon" /><p className="menuText">Movies</p></div>
              </Link>
              <Link className="links" to="/series">
                <div className="menuItem"><IconDeviceTv size={32} className="navbarIcon" /><p className="menuText">Series</p></div>
              </Link>
              <Link className="links" to="/suggestions">
                <div className="menuItem"><IconQuestionMark  size={32} className="navbarIcon" /><p className="menuText">Suggestion</p></div>
              </Link>
              <Link className="links" to="/About">
                <div className="menuItem"><IconUserHeart size={32} className="navbarIcon" /><p className="menuText">About Us</p></div>
              </Link>
            </>
          )}
        </div>

      </section>
    </>
  );
};

export default Navbar;
