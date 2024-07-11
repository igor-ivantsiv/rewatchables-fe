import { Divider, List, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconAlien, IconCircleCheck } from "@tabler/icons-react";

const About = () => {
  return (
    <div className="aboutPage">
      <h1>About Us</h1>
      <div className="about-project-wrapper">
        <Paper p="xl" shadow="lg" className="about-project">
          <h2 className="about-h">Rewatchables</h2>
          <Divider my="md" variant="dashed" />
          <Text c="dimmed">
            Welcome to Rewatchables, the number one platform for all your
            favorite series and movies that are definitely worth a rewatch!<br/>
            Ever looking for something to watch, but don't want to spend hours 
            scrolling on the various streaming platforms? Then Rewatchables is the place for you.
          </Text>
            <h3 className="about-ul-h">How to use...</h3>
            <List
              className="about-ul"
              size="sm"
              c="dimmed"
              icon={
                <ThemeIcon color="#f1580c" size={24} radius="xl">
                  <IconCircleCheck />
                </ThemeIcon>
              }
            >
              <List.Item>Find inspiration for something to watch by scrolling through all your rewatchable content on the homepage.</List.Item>
              <List.Item>Go to either the 'movies' or 'series' page for an accessible, organized overview of your content.</List.Item>
              <List.Item>Click on any movie or series to get the details, including where to watch it!</List.Item>
              <List.Item>Add any movie or series you find worthy of rewatching to the collection.</List.Item>
              <List.Item>Easily edit or delete any of the added Rewatchables.</List.Item>
              <List.Item>Don't remember the exact name of what you wanted to rewatch? Try the search page!</List.Item>
              <List.Item>Still don't know what to watch? Generate a suggestion!</List.Item>
            </List>
        </Paper>
      </div>
      <h2 className="about-h">Development team</h2>
      <Divider my="md" variant="dashed" />
      <div className="about-team-wrapper">
        <Paper p="xl" shadow="lg" className="about-team">
          <div className="team-icon-div">
            <IconAlien size={50}/>
          </div>
          <div className="team-name">Igor Ivantsiv</div>
          <Text c="dimmed">
        Greetings! My name is Igor. I am 29 years old. I was born in Ukraine, grew up in Israel and England, studied Economics & Business in the Netherlands and then moved to Germany to work as a product manager. Towards the end of 2023 I decided to do a career change to become a software developer and now I am here at the Ironhack Web Development bootcamp creating my first proper React project. My partner and I are excited to share this app with you. Enjoy!
          </Text>
        </Paper>
        <Paper p="xl" shadow="lg" className="about-team">
          <div className="team-icon-div">
            <IconAlien size={50}/>
          </div>
          <div className="team-name">Thomas Kruithof</div>
          <Text c="dimmed">
            Hi there! I'm Thomas, I'm 28 years old, born in the Netherlands and currently living in France.
            I'm on my way to becoming a full stack web developer, with the help of Ironhack bootcamp.
            This is one of the first React projects I've worked on, it was a lot of fun. 
            I've learned much from it, and I hope to be making many more apps in the future.
            <br />I hope you enjoy our app!
          </Text>
        </Paper>
      </div>
    </div>
  );
};

export default About;
