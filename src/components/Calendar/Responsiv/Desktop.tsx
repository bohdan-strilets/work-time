import { useTranslation } from 'react-i18next';
import Controllers from '../Controllers';
import Header from '../Header';
import MonthList from '../MonthList';
import CellDay from '../CellDay';
import CellInformation from '../CellInformation';
import DayInfo from '../DayInfo';
import ModalWindow from 'components/ModalWindow';
import AddInformationForm from 'components/Forms/AddInformationForm';
import DialogWindow from 'components/DialogWindow';
import EditInformationForm from 'components/Forms/EditInformationForm';
import Greetings from 'components/Greetings';
import RepeatConfirmEmailForm from 'components/Forms/RepeatConfirmEmailForm';
import ListDays from 'components/ListDays';
import useCalendar from 'hooks/useCalendar';
import useModalWindow from 'hooks/useModalWindow';
import { CalendarTypeEnum } from 'types/enums/CalendarTypeEnum';
import { CalendarLngKeys } from 'types/locales/CalendarLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { AuthLngKeys } from 'types/locales/AuthLngKeys';
import { List } from '../Calendar.styled';

const Desktop: React.FC<{}> = () => {
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
  } = useCalendar();
  const { checkQueryParam, modalsName } = useModalWindow();
  const { t } = useTranslation();

  return (
    <>
      <div>
        <Controllers
          handlePrevMonth={handlePrevMonth}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          handleChangeYear={handleChangeYear}
          date={date}
          handleNextMonth={handleNextMonth}
          backToCurrentDate={backToCurrentDate}
          handleChangeCalendarType={handleChangeCalendarType}
        />
        {calendarType === CalendarTypeEnum.Calendar ? (
          <>
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
                      <CellInformation date={date} dayInfo={dayInfo} />
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
          </>
        ) : (
          <ListDays />
        )}
      </div>
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
          />
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

export default Desktop;
