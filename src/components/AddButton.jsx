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
            <FormModal action="POST" closeModal={close}/>
        </Modal>
        <Button 
            onClick={open}
            variant="filled" 
            color="rgba(194, 58, 58, 1)" 
            size="compact-xl" 
            radius="lg"
        >
            +
        </Button>
        </>
    );
}

export default AddButton;