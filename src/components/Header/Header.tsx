import { List, Button, Label, Icon } from "./Header.styled";

const Header: React.FC<{}> = () => {
  return (
    <header>
      <List>
        <li>
          <Button type="button" width="35px" height="35px">
            <Icon size={24} />
          </Button>
        </li>
        <li>
          <Button type="button" width="200px" height="35px">
            <Label>Start</Label>
          </Button>
        </li>
      </List>
    </header>
  );
};

export default Header;
