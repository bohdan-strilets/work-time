import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import CalendarButton from '../../CalendarButton';
import DropdownList from 'components/UI/DropdownList';
import { month } from 'utilities/DefaultCalendarData';
import { ControllersProps } from 'types/props/ControllersProps';
import YearOptions from 'utilities/YearOptions';
import useTime from 'hooks/useTime';
import TypeCalendarOptions from 'utilities/TypeCalendarOptions';
import { CalendarTypeEnum } from 'types/enums/CalendarTypeEnum';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Wrapper, DateWindow, Group } from '../Controllers.styled';

const Desktop: React.FC<ControllersProps> = ({
  handlePrevMonth,
  selectedMonth,
  selectedYear,
  handleChangeYear,
  date,
  handleNextMonth,
  backToCurrentDate,
  handleChangeCalendarType,
}) => {
  const currentDateAndTime = useTime();
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CalendarButton
        handleClichk={handlePrevMonth}
        width="100px"
        background="var(--black-color)"
        color="var(--white-color)"
      >
        <IoMdArrowDropleft size={24} />
      </CalendarButton>
      <Group>
        <DateWindow width="170px">
          {month[selectedMonth]} {selectedYear}{' '}
        </DateWindow>
        <CalendarButton
          width="300px"
          background="var(--black-color)"
          color="var(--white-color)"
          handleClichk={backToCurrentDate}
        >
          {currentDateAndTime}
        </CalendarButton>
        <DropdownList
          type="single"
          name="selectedYear"
          options={YearOptions}
          defaultValue={date.getFullYear().toString()}
          onChange={handleChangeYear}
          buttonlabel={date.getFullYear().toString()}
          height="30px"
          width="170px"
          position="absolute"
        />
        <DropdownList
          type="single"
          name="selectedType"
          options={TypeCalendarOptions}
          defaultValue={CalendarTypeEnum.Calendar}
          onChange={handleChangeCalendarType}
          buttonlabel={t(CommonLngKeys.ShowHow, { ns: LocalesKeys.common })}
          height="30px"
          width="170px"
          position="absolute"
        />
      </Group>
      <CalendarButton
        handleClichk={handleNextMonth}
        width="100px"
        background="var(--black-color)"
        color="var(--white-color)"
      >
        <IoMdArrowDropright size={24} />
      </CalendarButton>
    </Wrapper>
  );
};

export default Desktop;
