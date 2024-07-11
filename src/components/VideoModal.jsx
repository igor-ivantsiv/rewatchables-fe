import { AspectRatio, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconError404, IconError404Off, IconExternalLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const VideoModal = ({ videoUrl }) => {

    const [opened, {open, close }] = useDisclosure(false);

    const [videoId, setVideoId] = useState("");

    useEffect(() => {
        
        if (videoUrl) {
            let videoIdStart = -1;

            videoIdStart = videoUrl.indexOf("?v=") + 3;
            if (videoIdStart !== -1) {
                setVideoId(videoUrl.substring(videoIdStart));
            }
        }

    }, [videoUrl]);
    
    const videoOpts = {
        
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <Modal 
            opened={opened} 
            onClose={close} 
            withCloseButton={false}
            size="auto"
            centered
            classNames={{
                content: "modal"
            }}
            >
                {
                    videoId ?
                    <AspectRatio ratio={16 / 9}>
                        <YouTube className="trailer-video" videoId={videoId} opts={videoOpts}/>
                    </AspectRatio>
                    :
                    <div className="trailer-404">
                        <IconError404 size={50} color="#f1580c"/>
                        <p>No trailer added yet...</p>
                    </div>
                }
                
            </Modal>

            <span onClick={open} className="trailer-link">
                Watch the trailer{" "}
                <IconExternalLink size={18} className="trailer-icon" />
            </span>
        </>
    )
}

export default VideoModal;