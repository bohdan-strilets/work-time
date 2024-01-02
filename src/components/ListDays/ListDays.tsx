import { MdOutlineWork, MdSunny } from 'react-icons/md';
import { ImOffice } from 'react-icons/im';
import { BsCheckAll, BsFillCalendar3WeekFill } from 'react-icons/bs';
import { BiSolidTimeFive } from 'react-icons/bi';
import { PiBeerSteinFill } from 'react-icons/pi';
import { BsHospitalFill } from 'react-icons/bs';
import { RiTimerFlashFill } from 'react-icons/ri';
import Loader from 'components/UI/Loader';
import { Status } from 'types/enums/StatusEnum';
import { month } from 'utilities/DefaultCalendarData';
import useListDays from 'hooks/useListDays';
import { Title, List, Item, Image, Wrapper, Value, IsAdditional } from './ListDays.styled';

const ListDays: React.FC<{}> = () => {
  const { data, sortedFilteredData } = useListDays();

  return (
    <>
      {!data && <Loader />}
      {data &&
        sortedFilteredData.map(item => {
          const monthName = month[Number(item.month) - 1];
          const title = `${monthName} ${item.year}`;
          return (
            <>
              <Title>{title}</Title>
              <List>
                {item.data?.map(item => {
                  const key = Object.keys(item.data)[0];
                  const workShiftNumber = item.data[key].workShiftNumber;
                  const additionalHours = item.data[key].additionalHours;
                  const numberHoursWorked = item.data[key].numberHoursWorked;
                  const time = item.data[key].time;
                  const status = item.data[key].status;
                  const dateArr = key.split('-');
                  const day = dateArr[0];
                  const monthName = month[Number(dateArr[1]) - 1];
                  const year = dateArr[2];

                  return (
                    <Item key={item._id}>
                      <Image status={status} />
                      <Wrapper>
                        <BsFillCalendar3WeekFill />
                        <Value>
                          {day} {monthName} {year}
                        </Value>
                      </Wrapper>
                      <Wrapper>
                        {status === Status.work && <ImOffice size={18} />}
                        {status === Status.vacation && <MdSunny size={18} />}
                        {status === Status.dayOff && <PiBeerSteinFill size={18} />}
                        {status === Status.sickLeave && <BsHospitalFill size={18} />}
                        <Value>
                          {status === Status.work && 'Work day'}
                          {status === Status.dayOff && 'Day off'}
                          {status === Status.vacation && 'Vacation'}
                          {status === Status.sickLeave && 'Sick leave'}
                        </Value>
                      </Wrapper>
                      <Wrapper>
                        <IsAdditional additionalHours={additionalHours}>
                          <BsCheckAll />
                        </IsAdditional>
                      </Wrapper>
                      <Wrapper>
                        <BiSolidTimeFive />
                        <Value>{time}</Value>
                      </Wrapper>
                      <Wrapper>
                        <RiTimerFlashFill />
                        <Value>{numberHoursWorked}h</Value>
                      </Wrapper>
                      <Wrapper>
                        <MdOutlineWork />
                        <Value>
                          {workShiftNumber === 0 && '-'}
                          {workShiftNumber === 1 && 'I'}
                          {workShiftNumber === 2 && 'II'}
                        </Value>
                      </Wrapper>
                    </Item>
                  );
                })}
              </List>
            </>
          );
        })}
    </>
  );
};

export default ListDays;