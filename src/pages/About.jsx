import { Divider, Paper, Text } from "@mantine/core";

const About = () => {
  return (
    <>
      <h1>About Us</h1>
      <div className="about-project-wrapper">
        <Paper p="xl" shadow="lg" className="about-project">
          <h2 className="about-h">Rewatchables</h2>
          <Divider my="md" variant="dashed" />
          <Text>
            some placeholder text
          </Text>
        </Paper>
      </div>
    </>
  );
};

export default About;
