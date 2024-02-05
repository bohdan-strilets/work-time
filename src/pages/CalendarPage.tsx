import { useTranslation } from 'react-i18next';
import Calendar from 'components/Calendar';
import ModalWindow from 'components/ModalWindow';
import AddInformationForm from 'components/Forms/AddInformationForm';
import DialogWindow from 'components/DialogWindow';
import EditInformationForm from 'components/Forms/EditInformationForm';
import Greetings from 'components/Greetings';
import RepeatConfirmEmailForm from 'components/Forms/RepeatConfirmEmailForm';
import AddedTodoForm from 'components/Forms/AddedTodoForm';
import DayInfo from 'components/Calendar/DayInfo';
import useCalendar from 'hooks/useCalendar';
import useModalWindow from 'hooks/useModalWindow';
import { CalendarLngKeys } from 'types/locales/CalendarLngKeys';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';

const CalendarPage: React.FC<{}> = () => {
  const { checkQueryParam, modalsName } = useModalWindow();
  const { t } = useTranslation();
  const {
    handlePrevMonth,
    handleChangeYear,
    handleChangeMonth,
    date,
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
    backToCurrentDate,
    handleChangeCalendarType,
    calendarType,
    isLoading,
    isDeleteLoading,
  } = useCalendar();

  return (
    <>
      <Calendar
        handlePrevMonth={handlePrevMonth}
        selectedMonth={selectedMonth}
        selectedYear={selectedYear}
        handleChangeYear={handleChangeYear}
        date={date}
        handleNextMonth={handleNextMonth}
        backToCurrentDate={backToCurrentDate}
        handleChangeCalendarType={handleChangeCalendarType}
        calendarType={calendarType}
        getMonthDate={getMonthDate}
        getInformationForDay={getInformationForDay}
        handleCellClick={handleCellClick}
        areEqual={areEqual}
        selectedDate={selectedDate}
        handleChangeMonth={handleChangeMonth}
        isLoading={isLoading}
      />
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
            dayInfoId={dayInfoId}
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.cellDay) && !dayInfo && selectedDate && (
        <ModalWindow title={`${dateTransform(selectedDate)}`}>
          <AddInformationForm selectedDate={selectedDate} />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.cellDayEdit) && selectedDate && (
        <ModalWindow title={`${dateTransform(selectedDate)}`}>
          <EditInformationForm dayId={dayInfoId} selectedDate={selectedDate} />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.cellDayDelete) && selectedDate && (
        <ModalWindow title={`${dateTransform(selectedDate)}`}>
          <DialogWindow
            negativeBtnLabel={t(CommonLngKeys.Cancel, { ns: LocalesKeys.common })}
            positiveBtnLabel={t(CommonLngKeys.Delete, { ns: LocalesKeys.common })}
            text={t(CalendarLngKeys.DeleteDayParagraph1, { ns: LocalesKeys.calendar })}
            handlePositiveClick={deleteInformationForDay}
            handleNegativeClick={() => navigate(-1)}
            isLoader={isDeleteLoading}
          />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.cellDayNewTodo) && (
        <ModalWindow title={t(TodosLngKeys.AddNewTask, { ns: LocalesKeys.todos })}>
          <AddedTodoForm dayId={dayInfoId} selectedDate={selectedDate} />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.greetings) && (
        <ModalWindow title={t(CommonLngKeys.Welcome, { ns: LocalesKeys.common })}>
          <Greetings />
        </ModalWindow>
      )}
      {checkQueryParam(modalsName.repeatActivationEmail) && (
        <ModalWindow title={t(AuthLngKeys.SendActivationEmailAgain, { ns: LocalesKeys.auth })}>
          <RepeatConfirmEmailForm />
        </ModalWindow>
      )}
    </>
  );
};

export default CalendarPage;
