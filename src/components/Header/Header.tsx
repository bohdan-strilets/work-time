import { useNavigate } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import Button from "components/UI/Button";
import { Wrapper, List } from "./Header.styled";

const Header: React.FC<{}> = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
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
          <Button
            type="button"
            label="Start"
            width="200px"
            height="35px"
            onClick={() => navigate("auth")}
          />
        </li>
      </List>
    </Wrapper>
  );
};

export default Header;
