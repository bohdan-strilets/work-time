import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import getRandomColor from 'utilities/getRandomColor';
import Checkbox from 'components/UI/Checkbox';
import TodoControllers from '../TodoControllers';
import PriorityEnum from 'types/enums/PriorityEnum';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import FormatDateTime from 'utilities/FormatDateTime';
import { TodoProps } from 'types/props/TodoProps';
import { useUpdateCompletedMutation } from '../../../redux/todo/todoApi';
import {
  Item,
  Image,
  Date,
  Container,
  Id,
  StatusBar,
  Priority,
  DateBar,
  CreatedDate,
} from './Todo.styled';

const Todo: React.FC<TodoProps> = ({ _id, task, priority, isCompleted, updatedAt, getTodoId }) => {
  const { t } = useTranslation();
  const [updateCompleted] = useUpdateCompletedMutation();

  useEffect(() => {
    getTodoId(_id);
  }, [_id, getTodoId]);

  const handleTodoChange = (value: boolean) => {
    const dto = { todoId: _id, updateCompletedDto: { isCompleted: value } };
    updateCompleted(dto);
  };

  return (
    <Item>
      <Image background={getRandomColor(0.6)}>
        <Date>28.01.2024</Date>
        <TodoControllers />
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
