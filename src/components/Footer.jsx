import { Text } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <ul className="footerList">
        <li>
            <a href="https://github.com/tdot123-1" target="_blank">
              <img src="" className="envelope" alt="gitHub" /> Thomas
            </a>
          </li>
          <li>
            <a href="https://github.com/igor-ivantsiv/" target="_blank">
              <img src="" className="envelope" alt="gitHub" /> Igor
            </a>
          </li>
          <li>
            <a href="mailto:idk@gmail.com">
              <img src="" className="envelope" alt="mail" />
            </a>
          </li>
          <Link to={"/about"}>
            <li>About us</li>
          </Link>
          <li>Made by Thomas & Igor ©</li>
        </ul>
      </footer>
      <div className="footer-link-wrapper">
        <a
          target="_blank"
          href="https://github.com/igor-ivantsiv/rewatchables-fe"
        >
          <Text size="sm" className="footer-link">
            GitHub repository
          </Text>
          <IconExternalLink size={18} color="#f1580c" />
        </a>
      </div>
    </>
  );
};

export default Footer;
