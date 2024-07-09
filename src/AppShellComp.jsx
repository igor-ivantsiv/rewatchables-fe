import { ActionIcon, AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import {
  IconLayoutSidebarLeftCollapse,
  IconLayoutSidebarLeftExpand,
} from "@tabler/icons-react";

function AppShellComp() {
  const [opened, { toggle }] = useDisclosure();

  const [navbarSmall, setNavbarSmall] = useState(false);

  const navbarWidth = navbarSmall ? 70 : 280;

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: navbarWidth,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Header />
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
              className="collapseIcon"
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
              className="collapseIcon"
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

      <AppShell.Footer p="md">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default AppShellComp;
