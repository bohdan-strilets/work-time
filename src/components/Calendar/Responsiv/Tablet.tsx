import { BsCheckAll } from 'react-icons/bs';
import { weekdays } from 'utilities/DefaultCalendarData';
import Controllers from '../Controllers';
import Header from '../Header';
import MonthList from '../MonthList';
import CellDay from '../CellDay';
import DayInfo from '../DayInfo';
import ModalWindow from 'components/ModalWindow';
import AddInformationForm from 'components/Forms/AddInformationForm';
import DialogWindow from 'components/DialogWindow';
import EditInformationForm from 'components/Forms/EditInformationForm';
import useCalendar from 'hooks/useCalendar';
import useModalWindow from 'hooks/useModalWindow';
import { Status } from 'types/enums/StatusEnum';
import {
  List,
  DayOfMonth,
  Container,
  DayStatus,
  AdditionalHours,
  AdditionalHoursLabel,
} from '../Calendar.styled';

const Tablet: React.FC<{}> = () => {
  const {
    handlePrevMonth,
    handleChangeYear,
    handleChangeMonth,
    date,
    yearSelect,
    handleNextMonth,
    getMonthDate,
    areEqual,
    selectedDate,
    selectedMonth,
    selectedYear,
    dateTransform,
    handleCellClick,
    dayInfo,
    getInformationForDay,
    deleteInformationForDay,
    navigate,
    dayInfoId,
  } = useCalendar();
  const { checkQueryParam, modalsName } = useModalWindow();

  return (
    <>
      <div>
        <Controllers
          handlePrevMonth={handlePrevMonth}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          handleChangeYear={handleChangeYear}
          yearSelect={yearSelect}
          date={date}
          handleNextMonth={handleNextMonth}
        />

        <Header />
        {getMonthDate(date.getFullYear(), date.getMonth()).map((week, index) => (
          <List key={index}>
            {week.map((date, index) => {
              const dayInfo = getInformationForDay(date);
              return date && date instanceof Date ? (
                <CellDay
                  key={index}
                  handleClick={() => handleCellClick(date)}
                  date={date}
                  areEqual={areEqual}
                  selectedDate={selectedDate}
                  status={dayInfo?.status}
                >
                  <DayOfMonth>{date.getDate()}</DayOfMonth>
                  {dayInfo?.status && (
                    <Container>
                      {dayInfo?.status === Status.work && <DayStatus>Work</DayStatus>}
                      {dayInfo?.status === Status.dayOff && <DayStatus>Day off</DayStatus>}
                      {dayInfo?.status === Status.vacation && <DayStatus>Vacation</DayStatus>}
                      {dayInfo?.status === Status.sickLeave && <DayStatus>Sick leave</DayStatus>}
                      {dayInfo?.additionalHours && (
                        <AdditionalHours>
                          <AdditionalHoursLabel>
                            <BsCheckAll size={18} color="var(--white-color)" />
                          </AdditionalHoursLabel>
                        </AdditionalHours>
                      )}
                    </Container>
                  )}
                </CellDay>
              ) : (
                <CellDay key={index} />
              );
            })}
            {checkQueryParam(modalsName.cellDay) && dayInfo && selectedDate && (
              <ModalWindow title={`${dateTransform(selectedDate)}`}>
                <DayInfo
                  status={dayInfo.status}
                  numberHoursWorked={dayInfo.numberHoursWorked}
                  date={selectedDate}
                  time={dayInfo.time}
                  workShiftNumber={dayInfo.workShiftNumber}
                  additionalHours={dayInfo.additionalHours}
                  dateTransform={dateTransform}
                />
              </ModalWindow>
            )}
            {checkQueryParam(modalsName.cellDay) && !dayInfo && selectedDate && (
              <ModalWindow title={`${dateTransform(selectedDate)}`}>
                <AddInformationForm selectedDate={selectedDate} />
              </ModalWindow>
            )}
          </List>
        ))}
        <MonthList handleChangeMonth={handleChangeMonth} selectedMonth={selectedMonth} />
      </div>
      {checkQueryParam(modalsName.cellDayEdit) && selectedDate && (
        <ModalWindow title={`${dateTransform(selectedDate)}`}>
          <EditInformationForm dayId={dayInfoId} selectedDate={selectedDate} />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.cellDayDelete) && selectedDate && (
        <ModalWindow title={`${dateTransform(selectedDate)}`}>
          <DialogWindow
            negativeBtnLabel="Cancel"
            positiveBtnLabel="Delete"
            text="Do you really want to delete information about the current day. Once confirmed, the action cannot be canceled."
            handlePositiveClick={deleteInformationForDay}
            handleNegativeClick={() => navigate(-1)}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default Tablet;
