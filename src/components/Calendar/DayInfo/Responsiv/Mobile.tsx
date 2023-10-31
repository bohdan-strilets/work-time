import { BsFillCalendar3WeekFill, BsCheckAll } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { GiCoins } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import {
  Container,
  Text,
  NumberHours,
  ExtraTimeStatus,
  Item,
} from "../DayInfo.styled";

const Mobile: React.FC<{}> = () => {
  return (
    <div>
      <Container
        margin="0 0 var(--medium-indent) 0"
        justifyContent="space-between"
      >
        <Container>
          <ImOffice size={28} />
          <Text fontSize="20px" fontWeight={900} margin="0 0 0 10px">
            Work day
          </Text>
        </Container>
        <NumberHours>12h</NumberHours>
      </Container>
      <Container margin="0 0 var(--medium-indent) 0" displayBlock={true}>
        <Container>
          <BsFillCalendar3WeekFill size={20} />
          <Text margin="0 0 0 10px">29 octobers 2023 - sun</Text>
        </Container>
        <Container>
          <BiSolidTimeFive size={20} />
          <Text margin="0 0 0 10px">18:00 - 06:00</Text>
        </Container>
        <Container>
          <MdOutlineWork size={20} />
          <Text margin="0 0 0 10px">II</Text>
        </Container>
      </Container>
      <Container
        margin="0 0 var(--medium-indent) 0"
        justifyContent="space-between"
      >
        <Text>Additional hours:</Text>
        <ExtraTimeStatus>
          <BsCheckAll size={20} />
        </ExtraTimeStatus>
      </Container>
      <Container justifyContent="space-between">
        <Text fontWeight={700}>Earnings:</Text>
        <Text>12h x 30zl = 500zl</Text>
      </Container>
      <ul>
        <Item>- 3% = 290</Item>
        <Item>- 5% = 230</Item>
        <Item>- 1% = 210</Item>
        <Item>- 15% = 160</Item>
      </ul>
      <Container justifyContent="end">
        <GiCoins size={34} color="orange" />
        <Text
          fontSize="20px"
          fontWeight={700}
          color="var(--green-color)"
          margin="0 0 0 10px"
        >
          +320zl
        </Text>
      </Container>
    </div>
  );
};

export default Mobile;
