import { AspectRatio, Image } from "@mantine/core";
import errorImg from "../assets/404.gif"

const NotFound = () => {
  return <>
  <div className="e404-h-div">
    <span className="e404-h1">404</span>
    <span className="e404-h2">Something went wrong...</span>
  </div>
  <div className="e404-div">
  <div className="e404-img-wrap">
  <AspectRatio ratio={16 /9} maw={600}>
    <Image
    src={errorImg}
    className="e404-gif"
    alt="404 error"
    />
  </AspectRatio>
  </div>
  </div>
  </>;
};

export default NotFound;
