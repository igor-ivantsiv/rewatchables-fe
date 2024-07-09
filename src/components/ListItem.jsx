import { Card, Image, Text, Group, AspectRatio } from "@mantine/core";
import RewatchableDetails from "./RewatchableDetails";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const ListItem = ({ rewatchable }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder onClick={open}>
        <Card.Section>
          <AspectRatio ratio={1080 / 720} maw={366} mx="auto">
            <Image src={rewatchable.image} height={549} alt="Cover" />
          </AspectRatio>
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{rewatchable.title}</Text>
        </Group>
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
        <RewatchableDetails rewatchableId={rewatchable.id} type={rewatchable.type} close={close}/>
      </Modal>
      </>
  );
};

export default ListItem;
