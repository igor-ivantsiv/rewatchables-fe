import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <section className="navbar">

          <div className="menu">
            <Link className="links" to="/">
              <p className="menuItem">Home</p>
            </Link>
            <Link className="links" to="/movies">
              <p className="menuItem">Movies</p>
            </Link>
            <Link className="links" to="/series">
              <p className="menuItem">Series</p>
            </Link>
            <Link className="links" to="/add">
              <p className="menuItem">Add Rewatchable</p>
            </Link>
            <Link className="links" to="/About">
              <p className="menuItem">About Us</p>
            </Link>
          </div>
      </section>
    </>
  );
};

export default Navbar;
