import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import FormModal from "../components/FormModal";

const HomePage = () => {
    
    const [openedFirst, {open: openFirst, close: closeFirst}] = useDisclosure(false)
    
    const [openedSecond, {open: openSecond, close: closeSecond}] = useDisclosure(false)

    return ( 
    <>
        <h1>Home Page</h1>

        <Modal 
            opened={openedFirst} 
            onClose={closeFirst} 
            title="Add Rewatchable"
            size="80%"
            >
            <FormModal action="POST" />
        </Modal>
        <Modal 
            opened={openedSecond} 
            onClose={closeSecond} 
            title="Edit Rewatchable"
            size="80%"
            >
            <FormModal action="PUT" id="8" type="movies"/>
        </Modal>
        
        <Button onClick={openFirst}>+</Button>
        <Button onClick={openSecond}>Edit</Button>
    </> 
    );
}
 
export default HomePage;