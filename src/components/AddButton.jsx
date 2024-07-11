import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FormModal from "./FormModal";
import { IconSquare, IconSquareRoundedPlus } from "@tabler/icons-react";

const AddButton = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Rewatchable" size="80%">
        <FormModal action="POST" closeModal={close} />
      </Modal>
      <Button
        className="button mobileHidden"
        onClick={open}
        rightSection={<IconSquareRoundedPlus size={26} />}
      >
        Add a Rewatchable
      </Button>
      <Button className="button bigScreenHidden mobileDisplay" onClick={open}>
        <span>
          <IconSquareRoundedPlus size={26} />
        </span>
      </Button>
    </>
  );
};

export default AddButton;
