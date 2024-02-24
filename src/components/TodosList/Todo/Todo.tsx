import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import Checkbox from 'components/UI/Checkbox';
import TodoControllers from '../TodoControllers';
import PriorityEnum from 'types/enums/PriorityEnum';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import FormatDateTime from 'utilities/FormatDateTime';
import { TodoProps } from 'types/props/TodoProps';
import { useUpdateCompletedMutation } from '../../../redux/todo/todoApi';
import { month } from 'utilities/defaultData/DefaultCalendarData';
import { FormatDateTimeZone } from 'utilities/FormatDateTimeZone';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { TodosResponseType } from 'types/types/TodosResponseType';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';
import {
  Item,
  Image,
  AppointmentDate,
  Container,
  Id,
  StatusBar,
  Priority,
  DateBar,
  CreatedDate,
} from './Todo.styled';

const Todo: React.FC<TodoProps> = ({
  _id,
  task,
  priority,
  isCompleted,
  updatedAt,
  getTodoId,
  appointmentDate,
}) => {
  const { t } = useTranslation();
  const [updateCompleted, { isLoading }] = useUpdateCompletedMutation();

  const handleTodoChange = async (value: boolean) => {
    const dto = { todoId: _id, updateCompletedDto: { isCompleted: value } };
    await updateCompleted(dto);
    try {
      toast.success(
        t(TodosLngKeys.TaskStatusHasBeenSuccessfullyUpdated, { ns: LocalesKeys.todos }),
      );
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<TodosResponseType>;
        if (axiosError.response) {
          const serverError = axiosError.response.data as TodosResponseType;
          CustomErrorHandler(serverError);
        } else {
          toast.error(t(ErrorLngKeys.GeneralAxiosError, { ns: LocalesKeys.error }));
        }
      } else {
        toast.error(t(ErrorLngKeys.GeneralError, { ns: LocalesKeys.error }));
      }
    }
  };

  const getDateWithMonthName = () => {
    const formatedDate = FormatDateTimeZone(appointmentDate);
    const date = new Date(formatedDate);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${day} ${month[monthIndex]} ${year}`;
  };

  return (
    <Item>
      <Image>
        {appointmentDate && <AppointmentDate>{getDateWithMonthName()}</AppointmentDate>}
        <TodoControllers todoId={_id} getTodoId={getTodoId} />
      </Image>
      <Container>
        <Id>ID: {_id}</Id>
        <p>{task}</p>
        <StatusBar>
          <Priority priority={priority}>
            {priority === PriorityEnum.Low && t(CommonLngKeys.Low, { ns: LocalesKeys.common })}
            {priority === PriorityEnum.Medium &&
              t(CommonLngKeys.Medium, { ns: LocalesKeys.common })}
            {priority === PriorityEnum.High && t(CommonLngKeys.High, { ns: LocalesKeys.common })}
          </Priority>
          <Checkbox
            name={`todo-${_id}`}
            onChange={value => handleTodoChange(value)}
            label={t(CommonLngKeys.Completed, { ns: LocalesKeys.common })}
            defaultValue={isCompleted}
            readOnly={true}
            disabled={isLoading}
          />
        </StatusBar>
        <DateBar>
          <p>{t(CommonLngKeys.LastUpdated, { ns: LocalesKeys.common })}:</p>
          <CreatedDate>{FormatDateTime(updatedAt.toString())}</CreatedDate>
        </DateBar>
      </Container>
    </Item>
  );
};

export default Todo;
