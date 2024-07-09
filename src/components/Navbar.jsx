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
                <p className="navbarP">
                  <IconHome className="navbarIcon" />
                </p>
              </Link>
              <Link className="links" to="/movies">
                <p className="navbarP">
                  <IconMovie className="navbarIcon" />
                </p>
              </Link>
              <Link className="links" to="/series">
                <p className="navbarP">
                  <IconDeviceTv className="navbarIcon" />
                </p>
              </Link>
              <Link className="links" to="/suggestions">
                <p className="navbarP">
                  <IconQuestionMark className="navbarIcon" />
                </p>
              </Link>
              <Link className="links" to="/About">
                <p className="navbarP">
                  <IconUserHeart className="navbarIcon" />
                </p>
              </Link>
            </>
          ) : (
            <>
              <Link className="links" to="/">
                <p className="menuItem">Home</p>
              </Link>
              <Link className="links" to="/movies">
                <p className="menuItem">Movies</p>
              </Link>
              <Link className="links" to="/series">
                <p className="menuItem">Series</p>
              </Link>
              <Link className="links" to="/suggestions">
                <p className="menuItem">Suggestion</p>
              </Link>
              <Link className="links" to="/About">
                <p className="menuItem">About Us</p>
              </Link>
            </>
          )}
        </div>

      </section>
    </>
  );
};

export default Navbar;
