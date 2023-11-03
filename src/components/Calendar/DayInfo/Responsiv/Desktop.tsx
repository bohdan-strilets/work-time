import { BsFillCalendar3WeekFill, BsCheckAll } from "react-icons/bs";
import { BiSolidTimeFive } from "react-icons/bi";
import { MdOutlineWork } from "react-icons/md";
import { GiCoins } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { DayInfoProps } from "types/props/DayInfoProps";
import { Status } from "types/enums/StatusEnum";
import useCalculateDay from "hooks/useCalculateDay";
import {
  Container,
  Text,
  NumberHours,
  ExtraTimeStatus,
  Item,
} from "../DayInfo.styled";

const Desktop: React.FC<DayInfoProps> = ({
  status,
  numberHoursWorked,
  date,
  time,
  workShiftNumber,
  additionalHours,
  dateTransform,
}) => {
  const { calculateEarningsDay } = useCalculateDay();

  return (
    <div>
      <Container
        margin="0 0 var(--small-indent) 0"
        justifyContent="space-between"
      >
        <Container>
          <ImOffice size={28} />
          <Text fontSize="24px" fontWeight={900} margin="0 0 0 10px">
            {status === Status.work && "Work day"}
            {status === Status.dayOff && "Day off"}
            {status === Status.vacation && "Vacation"}
            {status === Status.sickLeave && "Sick leave"}
          </Text>
        </Container>
        <NumberHours>
          {numberHoursWorked > 0 ? `${numberHoursWorked}h` : "-"}
        </NumberHours>
      </Container>
      <Container
        margin="0 0 var(--small-indent) 0"
        justifyContent="space-between"
      >
        <Container>
          <BsFillCalendar3WeekFill size={20} />
          {date && <Text margin="0 0 0 10px">{dateTransform(date)}</Text>}
        </Container>
        {
          <Container>
            <BiSolidTimeFive size={20} />
            <Text margin="0 0 0 10px">{time !== "" ? time : "-"}</Text>
          </Container>
        }
        <Container>
          <MdOutlineWork size={20} />
          <Text margin="0 0 0 10px">
            {workShiftNumber === 0 && "-"}
            {workShiftNumber === 1 && "I"}
            {workShiftNumber === 2 && "II"}
          </Text>
        </Container>
      </Container>
      <Container
        margin="0 0 var(--small-indent) 0"
        justifyContent="space-between"
      >
        <Text>Additional hours:</Text>
        <ExtraTimeStatus additionalHours={additionalHours}>
          <BsCheckAll size={20} />
        </ExtraTimeStatus>
      </Container>
      {status !== Status.dayOff && (
        <Container justifyContent="space-between">
          <Text fontWeight={700}>Earnings:</Text>
          <Text>{calculateEarningsDay(numberHoursWorked, 33)}</Text>
        </Container>
      )}
      {status !== Status.dayOff && (
        <ul>
          <Item>- 3% = 290</Item>
          <Item>- 5% = 230</Item>
          <Item>- 1% = 210</Item>
          <Item>- 15% = 160</Item>
        </ul>
      )}
      <Container justifyContent="end">
        <GiCoins size={34} color="orange" />
        <Text
          fontSize="24px"
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

export default Desktop;
