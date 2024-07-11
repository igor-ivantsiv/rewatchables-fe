import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconExternalLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const VideoModal = ({ videoUrl }) => {

    const [opened, {open, close }] = useDisclosure(false);

    const [videoId, setVideoId] = useState("");

    useEffect(() => {
        
        if (videoUrl) {
            console.log(videoUrl);
            let videoIdStart = -1;

            videoIdStart = videoUrl.indexOf("?v=") + 3;
            if (videoIdStart !== -1) {
                setVideoId(videoUrl.substring(videoIdStart));
                console.log(videoUrl.substring(videoIdStart))
            }
        }

    }, [videoUrl]);
    
    const videoOpts = {
        height: "390",
        width: "640",
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <Modal 
            opened={opened} 
            onClose={close} 
            title="Trailer"
            size="auto"
            centered
            >
                <YouTube videoId={videoId} opts={videoOpts}/>
            </Modal>

            <span onClick={open}>
                Watch the trailer{" "}
                <IconExternalLink size={18} color="darkgrey" />
            </span>
        </>
    )
}

export default VideoModal;