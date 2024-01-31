import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalWindow from 'components/ModalWindow';
import DialogWindow from 'components/DialogWindow';
import useModalWindow from 'hooks/useModalWindow';
import TodosList from 'components/TodosList';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { useDeleteTodoMutation } from '../redux/todo/todoApi';

const TodosPage: React.FC<{}> = () => {
  const [todoId, setTodoId] = useState<null | string>(null);
  const { checkQueryParam, modalsName, closeModal } = useModalWindow();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [deleteTodo] = useDeleteTodoMutation();

  const getTodoId = (todoId: string) => setTodoId(todoId);

  const handleDeleteTodo = () => {
    if (todoId !== null) {
      deleteTodo(todoId);
      closeModal();
      toast.success(t(TodosLngKeys.TaskWasSuccessfullyDeleted, { ns: LocalesKeys.todos }));
    }
  };

  return (
    <>
      <TodosList getTodoId={getTodoId} />
      {checkQueryParam(modalsName.deleteTodo) && (
        <ModalWindow title={t(TodosLngKeys.DeleteTodo, { ns: LocalesKeys.todos })}>
          <DialogWindow
            negativeBtnLabel={t(CommonLngKeys.Cancel, { ns: LocalesKeys.common })}
            positiveBtnLabel={t(CommonLngKeys.Delete, { ns: LocalesKeys.common })}
            text={t(TodosLngKeys.AreYouSureYouWantToDeleteSelectedTask, {
              ns: LocalesKeys.todos,
            })}
            handlePositiveClick={handleDeleteTodo}
            handleNegativeClick={() => navigate(-1)}
          />
        </ModalWindow>
      )}
    </>
  );
};

export default TodosPage;
