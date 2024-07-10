import { Card, Image, Text, Group, AspectRatio, Rating } from "@mantine/core";
import RewatchableDetails from "./RewatchableDetails";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const ListItem = ({ rewatchable }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card
        className="listCard"
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        onClick={open}
      >
        <Card.Section>
          <AspectRatio ratio={1080 / 720} maw={333} mx="auto">
            <Image src={rewatchable.image} height={500} alt="Cover" />
          </AspectRatio>
        </Card.Section>
        <div className="cardContent">
          <div className="cardTextDiv">
            <Group justify="space-between" mt="md" mb="xs">
              <Text className="cardText" fw={500}>{rewatchable.title}</Text>
            </Group>
          </div>
          <div>
            <Group>
              <Rating
                fractions={4}
                name="rating"
                value={rewatchable.rating}
                size="lg"
                readOnly
              />
            </Group>
          </div>
        </div>
      </Card>

      <Modal
        size="90%"
        opened={opened}
        onClose={close}
        centered
        title={rewatchable.title}
        classNames={{
          title: "customTitle",
        }}
      >
        <RewatchableDetails
          rewatchableId={rewatchable.id}
          type={rewatchable.type}
          close={close}
        />
      </Modal>
    </>
  );
};

export default ListItem;
