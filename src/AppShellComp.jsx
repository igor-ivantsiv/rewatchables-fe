import { ActionIcon, AppShell, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import {
  IconBrandGithub,
  IconExternalLink,
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
  IconMail,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import AddButton from "./components/AddButton";
import Logo from "./assets/logo.png"

function AppShellComp() {
  const [opened, { toggle }] = useDisclosure();

  const [navbarSmall, setNavbarSmall] = useState(false);

  const navbarWidth = navbarSmall ? 62 : 240;

  const footerPaddingLeft = navbarSmall ? "62px" : "240px";

  const isMobile = window.innerWidth < 768;

  return (
    <AppShell
      header={{ height: 72 }}
      navbar={{
        width: navbarWidth,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
      <div className="mainHeader">
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <AddButton className="add-btn" />
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <div className="divNavbar">
          {navbarSmall ? (
            <ActionIcon
              size={32}
              variant="default"
              aria-label="ActionIcon with size as a number"
              radius="xl"
              onClick={() => setNavbarSmall(false)}
              className="collapseIcon mobileHidden"
            >
              <IconLayoutSidebarLeftExpand />
            </ActionIcon>
          ) : (
            <ActionIcon
              size={32}
              variant="default"
              aria-label="ActionIcon with size as a number"
              radius="xl"
              onClick={() => setNavbarSmall(true)}
              className="collapseIcon mobileHidden"
            >
              <IconLayoutSidebarLeftCollapse />
            </ActionIcon>
          )}

          <Navbar navbarSmall={navbarSmall} />
        </div>
      </AppShell.Navbar>

      <AppShell.Main>
        <App />
      </AppShell.Main>

      <AppShell.Footer p="xs">
      <footer style={{paddingLeft: footerPaddingLeft}}>
      <div className="footer-link-wrapper footerMobile" style={isMobile ? { marginLeft: `-${footerPaddingLeft}` } : {}}>
      <Text size="sm" className="footer-link">
            <a style={{color: "#f1580c"}}  href="https://github.com/tdot123-1" target="_blank">
            Thomas <IconBrandGithub size={18} color="#f1580c" /> 
            </a>
          </Text>
          <Text size="sm" className="footer-link">
            <a style={{color: "#f1580c"}}  href="https://github.com/igor-ivantsiv/" target="_blank">
            Igor <IconBrandGithub size={18} color="#f1580c" /> 
            </a>
          </Text>
          <a 
          target="_blank"
          href="https://github.com/igor-ivantsiv/rewatchables-fe"
        >
          <Text size="sm" className="footer-link">
            GitHub repository
          </Text>
          <IconBrandGithub size={18} color="#f1580c" />
        </a>
          <Link to={"/about"}>
          <Text size="sm" className="footer-link">About us</Text>
          </Link>
          <Text size="sm" className="footer-link">Made by Thomas & Igor ©</Text>
    

      </div>
      </footer>
      </AppShell.Footer>
    </AppShell>
  );
}

export default AppShellComp;
