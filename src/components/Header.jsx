import { Link } from "react-router-dom";
import AddButton from "./AddButton";
import { Center, Flex, Group } from "@mantine/core";
import Logo from "../assets/logo.png"

const Header = () => {
    return ( 
    <>
      <div className="mainHeader">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <AddButton className="add-btn" />
      </div>
    </> 
  );
}
 
export default Header;