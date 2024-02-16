import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BsFillCalendar3WeekFill, BsCheckAll } from 'react-icons/bs';
import { BiSolidTimeFive } from 'react-icons/bi';
import { MdOutlineWork, MdModeEditOutline, MdDelete, MdSunny } from 'react-icons/md';
import { GiCoins } from 'react-icons/gi';
import { ImOffice } from 'react-icons/im';
import { PiBeerSteinFill } from 'react-icons/pi';
import { BsHospitalFill } from 'react-icons/bs';
import IncomeList from 'components/Calendar/IncomeList';
import TodoList from 'components/Calendar/TodoList';
import Weather from 'components/Calendar/Weather';
import Loader from 'components/UI/Loader';
import ExpensesList from 'components/Calendar/ExpensesList';
import { DayInfoProps } from 'types/props/DayInfoProps';
import { Status } from 'types/enums/StatusEnum';
import useCalculateDay from 'hooks/useCalculateDay';
import useCalculateTax from 'hooks/useCalculateTax';
import { CalendarLngKeys } from 'types/locales/CalendarLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import useWeather from 'hooks/useWeather';
import { useGetWeatherMutation } from '../../../../redux/weather/weatherApi';
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
  dayInfoId,
}) => {
  const {
    handleDeleteBtnClick,
    handleEditBtnClick,
    additional,
    earningForDay,
    calculateNightHours,
    START_TIME,
    START_NIGHT_TIME,
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
    amountForPpk,
    total,
    pensionContribution,
    disabilityContribution,
    sicknessInsuranceContribution,
  } = useCalculateTax({ earningForDay });
  const { t } = useTranslation();
  const { weatherDto } = useWeather(date ?? new Date());
  const [getWeather, { isLoading, data }] = useGetWeatherMutation();
  const forecast = data?.data;

  useEffect(() => {
    getWeather(weatherDto);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading && <Loader />}
      {forecast && (
        <Weather
          averageTemperature={forecast.averageTemperature}
          weatherCondition={forecast.weatherCondition}
          weatherIcon={forecast.weatherIcon}
          maximumTemperature={forecast.maximumTemperature}
          minimumTemperature={forecast.minimumTemperature}
        />
      )}
      <Container margin="0 0 var(--small-indent) 0" justifyContent="space-between">
        <Container>
          {status === Status.work && <ImOffice size={28} />}
          {status === Status.vacation && <MdSunny size={28} />}
          {status === Status.dayOff && <PiBeerSteinFill size={28} />}
          {status === Status.sickLeave && <BsHospitalFill size={28} />}
          <Text fontSize="24px" fontWeight={900} margin="0 0 0 10px">
            {status === Status.work && t(CommonLngKeys.WorkDay, { ns: LocalesKeys.common })}
            {status === Status.dayOff && t(CommonLngKeys.DayOff, { ns: LocalesKeys.common })}
            {status === Status.vacation && t(CommonLngKeys.Vacation, { ns: LocalesKeys.common })}
            {status === Status.sickLeave && t(CommonLngKeys.SickLeave, { ns: LocalesKeys.common })}
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
        <Text>{t(CalendarLngKeys.AdditionalHours, { ns: LocalesKeys.calendar })}:</Text>
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
          <Text fontWeight={700}>{t(CommonLngKeys.Earnings, { ns: LocalesKeys.common })}:</Text>
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
      {status !== Status.dayOff && (
        <ExpensesList
          healthInsurance={healthInsurance}
          incomeTax={incomeTax}
          pensionContribution={pensionContribution}
          disabilityContribution={disabilityContribution}
          sicknessInsuranceContribution={sicknessInsuranceContribution}
          amountForPpk={amountForPpk}
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
      <TodoList dayId={dayInfoId} />
    </div>
  );
};

export default Desktop;
