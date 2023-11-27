import { BsFillCalendar3WeekFill, BsCheckAll } from 'react-icons/bs';
import { BiSolidTimeFive } from 'react-icons/bi';
import { MdOutlineWork, MdModeEditOutline, MdDelete, MdSunny } from 'react-icons/md';
import { GiCoins } from 'react-icons/gi';
import { ImOffice } from 'react-icons/im';
import { PiBeerSteinFill } from 'react-icons/pi';
import { BsHospitalFill } from 'react-icons/bs';
import IncomeList from 'components/Calendar/IncomeList';
import ExpensesList from 'components/Calendar/ExpensesList';
import { DayInfoProps } from 'types/props/DayInfoProps';
import { Status } from 'types/enums/StatusEnum';
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

const Desktop: React.FC<DayInfoProps> = ({
  status,
  numberHoursWorked,
  date,
  time,
  workShiftNumber,
  additionalHours,
  dateTransform,
}) => {
  const {
    handleDeleteBtnClick,
    handleEditBtnClick,
    additional,
    earningForDay,
    calculateNightHours,
  } = useCalculateDay({
    additionalHours,
    time,
    numberHoursWorked,
    workShiftNumber,
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
          {status === Status.work && <ImOffice size={28} />}
          {status === Status.vacation && <MdSunny size={28} />}
          {status === Status.dayOff && <PiBeerSteinFill size={28} />}
          {status === Status.sickLeave && <BsHospitalFill size={28} />}
          <Text fontSize="24px" fontWeight={900} margin="0 0 0 10px">
            {status === Status.work && 'Work day'}
            {status === Status.dayOff && 'Day off'}
            {status === Status.vacation && 'Vacation'}
            {status === Status.sickLeave && 'Sick leave'}
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
      {status !== Status.dayOff && (
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
          />
        </Container>
      )}
      {status !== Status.dayOff && (
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

export default Desktop;
