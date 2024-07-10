import { Divider, List, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconAlien, IconCircleCheck } from "@tabler/icons-react";

const About = () => {
  return (
    <>
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
          <div className="team-name">Team member #1</div>
          <Text c="dimmed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec orci eu diam vestibulum porttitor a at felis. Proin efficitur laoreet pharetra. Maecenas cursus rutrum nulla, eget commodo sapien lobortis vitae. Cras et dapibus sem, quis interdum lorem. Pellentesque condimentum, felis quis fringilla fermentum, nulla orci tempor leo, sed imperdiet quam leo eget urna. Pellentesque varius diam ut purus commodo malesuada. Nam a neque a sem aliquam pretium et ut urna. Maecenas aliquam sagittis augue, eu gravida eros luctus vel. Maecenas sollicitudin tempus arcu, iaculis lacinia quam rutrum eu. Pellentesque facilisis efficitur hendrerit. Nam et ullamcorper eros. Maecenas vestibulum vehicula porta. 
          </Text>
        </Paper>
        <Paper p="xl" shadow="lg" className="about-team">
          <div className="team-icon-div">
            <IconAlien size={50}/>
          </div>
          <div className="team-name">Team member #2</div>
          <Text c="dimmed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec orci eu diam vestibulum porttitor a at felis. Proin efficitur laoreet pharetra. Maecenas cursus rutrum nulla, eget commodo sapien lobortis vitae. Cras et dapibus sem, quis interdum lorem. Pellentesque condimentum, felis quis fringilla fermentum, nulla orci tempor leo, sed imperdiet quam leo eget urna. Pellentesque varius diam ut purus commodo malesuada. Nam a neque a sem aliquam pretium et ut urna. Maecenas aliquam sagittis augue, eu gravida eros luctus vel. Maecenas sollicitudin tempus arcu, iaculis lacinia quam rutrum eu. Pellentesque facilisis efficitur hendrerit. Nam et ullamcorper eros. Maecenas vestibulum vehicula porta. 
          </Text>
        </Paper>
      </div>
    </>
  );
};

export default About;
