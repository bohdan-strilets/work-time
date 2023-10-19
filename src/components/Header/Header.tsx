import { CgMenuGridO } from "react-icons/cg";
import Button from "components/UI/Button";
import { List } from "./Header.styled";

const Header: React.FC<{}> = () => {
  return (
    <header>
      <List>
        <li>
          <Button
            type="button"
            icon={<CgMenuGridO size={24} />}
            width="35px"
            height="35px"
          />
        </li>
        <li>
          <Button type="button" label="Start" width="200px" height="35px" />
        </li>
      </List>
    </header>
  );
};

export default Header;
