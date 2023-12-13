import { BsFillCalendar3WeekFill, BsCheckAll } from 'react-icons/bs';
import { BiSolidTimeFive } from 'react-icons/bi';
import { MdOutlineWork, MdModeEditOutline, MdDelete, MdSunny } from 'react-icons/md';
import { GiCoins } from 'react-icons/gi';
import { ImOffice } from 'react-icons/im';
import { PiBeerSteinFill } from 'react-icons/pi';
import { BsHospitalFill } from 'react-icons/bs';
import ExpensesList from 'components/Calendar/ExpensesList';
import IncomeList from 'components/Calendar/IncomeList';
import { DayInfoProps } from 'types/props/DayInfoProps';
import { StatusValue } from 'types/enums/StatusEnum';
import useCalculateDay from 'hooks/useCalculateDay';
import useCalculateTax from 'hooks/useCalculateTax';
import {
  Container,
  Text,
  NumberHours,
  ExtraTimeStatus,
  List,
  ItemLi,
  Button,
} from '../DayInfo.styled';

const Tablet: React.FC<DayInfoProps> = ({
  status,
  numberHoursWorked,
  date,
  time,
  workShiftNumber,
  additionalHours,
  dateTransform,
}) => {
  const {
    earningForDay,
    additional,
    calculateNightHours,
    START_TIME,
    START_NIGHT_TIME,
    handleDeleteBtnClick,
    handleEditBtnClick,
  } = useCalculateDay({
    additionalHours,
    time,
    numberHoursWorked,
    workShiftNumber,
    status,
  });
  const {
    healthInsurance,
    incomeTax,
    total,
    pensionContribution,
    disabilityContribution,
    sicknessInsuranceContribution,
  } = useCalculateTax({ earningForDay });

  return (
    <div>
      <Container margin="0 0 var(--small-indent) 0" justifyContent="space-between">
        <Container>
          {status === StatusValue.work && <ImOffice size={28} />}
          {status === StatusValue.vacation && <MdSunny size={28} />}
          {status === StatusValue.dayOff && <PiBeerSteinFill size={28} />}
          {status === StatusValue.sickLeave && <BsHospitalFill size={28} />}
          <Text fontSize="24px" fontWeight={900} margin="0 0 0 10px">
            {status === StatusValue.work && 'Work day'}
            {status === StatusValue.dayOff && 'Day off'}
            {status === StatusValue.vacation && 'Vacation'}
            {status === StatusValue.sickLeave && 'Sick leave'}
          </Text>
        </Container>
        <NumberHours>{numberHoursWorked > 0 ? `${numberHoursWorked}h` : '-'}</NumberHours>
      </Container>
      <Container margin="0 0 var(--small-indent) 0" justifyContent="space-between">
        <Container>
          <BsFillCalendar3WeekFill size={20} />
          {date && <Text margin="0 0 0 10px">{dateTransform(date)}</Text>}
        </Container>
        <Container>
          <BiSolidTimeFive size={20} />
          <Text margin="0 0 0 10px">{time !== '' ? time : '-'}</Text>
        </Container>
        <Container>
          <MdOutlineWork size={20} />
          <Text margin="0 0 0 10px">
            {workShiftNumber === 0 && '-'}
            {workShiftNumber === 1 && 'I'}
            {workShiftNumber === 2 && 'II'}
          </Text>
        </Container>
      </Container>
      <Container margin="0 0 var(--small-indent) 0" justifyContent="space-between">
        <Text>Additional hours:</Text>
        <ExtraTimeStatus additionalHours={additionalHours}>
          <BsCheckAll size={20} />
        </ExtraTimeStatus>
      </Container>
      {status !== StatusValue.dayOff && (
        <Container
          justifyContent="space-between"
          alignItems="flex-start"
          margin="0 0 var(--medium-indent) 0"
        >
          <Text fontWeight={700}>Earnings:</Text>
          <IncomeList
            numberHoursWorked={numberHoursWorked}
            workShiftNumber={workShiftNumber}
            additional={additional}
            calculateNightHours={calculateNightHours}
            time={time}
            startTime={START_TIME}
            startNightTime={START_NIGHT_TIME}
            status={status}
          />
        </Container>
      )}
      {status !== StatusValue.dayOff && (
        <ExpensesList
          healthInsurance={healthInsurance}
          incomeTax={incomeTax}
          pensionContribution={pensionContribution}
          disabilityContribution={disabilityContribution}
          sicknessInsuranceContribution={sicknessInsuranceContribution}
        />
      )}
      <Container justifyContent="space-between">
        <List>
          <ItemLi>
            <Button type="button" onClick={handleEditBtnClick}>
              <MdModeEditOutline />
            </Button>
          </ItemLi>
          <ItemLi>
            <Button type="button" onClick={handleDeleteBtnClick}>
              <MdDelete />
            </Button>
          </ItemLi>
        </List>
        <Container justifyContent="end">
          <GiCoins size={34} color="orange" />
          <Text fontSize="24px" fontWeight={700} color="var(--green-color)" margin="0 0 0 10px">
            + {total} PLN
          </Text>
        </Container>
      </Container>
    </div>
  );
};

export default Tablet;
