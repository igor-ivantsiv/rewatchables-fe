import { Text } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

const Footer = () => {
  return (
    <>
    <div className="footer-link-wrapper">
    <a target="_blank" href="https://github.com/igor-ivantsiv/rewatchables-fe">
      <Text size="sm" className="footer-link">
        GitHub repository
      </Text>
      <IconExternalLink
        size={18}
        color="#f1580c"
      />
    </a>
    </div>
    </>
  )
  
};

export default Footer;
