import { CgFacebook } from "react-icons/cg";
import { RiTwitterXLine } from "react-icons/ri";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { List, Item, Reference, Label } from "./SocialNetworks.styled";

const SocialNetworks: React.FC<{}> = () => {
  return (
    <List>
      <Item>
        <Reference
          href="https//facebbok.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <CgFacebook size={20} />
        </Reference>
        <Label>Facebook</Label>
      </Item>
      <Item>
        <Reference
          href="https//twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RiTwitterXLine size={20} />
        </Reference>
        <Label>Twitter</Label>
      </Item>
      <Item>
        <Reference
          href="https//instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BiLogoInstagramAlt size={20} />
        </Reference>
        <Label>Instagram</Label>
      </Item>
      <Item>
        <Reference
          href="https//pinterest.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaPinterestP size={20} />
        </Reference>
        <Label>Pinterest</Label>
      </Item>
      <Item>
        <Reference
          href="https//linkedin.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedinIn size={20} />
        </Reference>
        <Label>Linkedin</Label>
      </Item>
    </List>
  );
};

export default SocialNetworks;
