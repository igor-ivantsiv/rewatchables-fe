import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import App from './App';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

function AppShellComp() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <Header />
      </AppShell.Header>

      <AppShell.Navbar p="md"><Navbar /></AppShell.Navbar>

      <AppShell.Main><App /></AppShell.Main>

      <AppShell.Footer p="md"><Footer /></AppShell.Footer>
    </AppShell>
  );
}

export default AppShellComp