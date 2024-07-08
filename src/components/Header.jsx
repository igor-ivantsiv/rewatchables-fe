import { Link } from "react-router-dom";
import AddButton from "./AddButton";
import { Center, Flex, Group } from "@mantine/core";

const Header = () => {
    return ( 
    <>
    <Flex
      justify="space-between"
      align="stretch"
    >
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
      <div>
        <AddButton />
      </div>
    </Flex>
    </> 
  );
}
 
export default Header;