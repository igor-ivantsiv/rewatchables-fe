import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import FormModal from "./FormModal";


const AddButton = () => {

    const [opened, {open, close}] = useDisclosure(false)

    return (
        <>
        <Modal
            opened={opened} 
            onClose={close} 
            title="Add Rewatchable"
            size="80%"
        >
            <FormModal action="POST" />
        </Modal>
        <Button 
            onClick={open}
            variant="filled" 
            color="rgba(194, 58, 58, 1)" 
            size="md" 
            radius="lg"
        >
            +
        </Button>
        </>
    );
}

export default AddButton;