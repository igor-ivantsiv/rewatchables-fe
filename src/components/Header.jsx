import { Link } from "react-router-dom";

const Header = () => {
    return ( <>
            <div className="mainHeader">
            <img
            className="menuIcon"
            src=""
            alt="menu icon"
          />
          <Link to="/">
            <img className="logo" src="" alt="logo" />
          </Link>
          <Link className="links" to="/">
            <p className="pageName">Rewatchables</p>
          </Link>

        </div>
    </> );
}
 
export default Header;