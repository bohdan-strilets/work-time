import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ModalWindow from 'components/ModalWindow';
import DialogWindow from 'components/DialogWindow';
import useModalWindow from 'hooks/useModalWindow';
import TodosList from 'components/TodosList';
import EditTodoForm from 'components/Forms/EditTodoForm';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { useDeleteTodoMutation } from '../redux/todo/todoApi';
import useSoundSprite from 'hooks/useSoundSprite';
import { SoundNamesEnum } from 'types/enums/SoundNamesEnum';
import { TodosResponseType } from 'types/types/TodosResponseType';
import CustomErrorHandler from 'utilities/secondaryFunctions/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';

const TodosPage: React.FC<{}> = () => {
  const [todoId, setTodoId] = useState<null | string>(null);
  const { checkQueryParam, modalsName, closeModal } = useModalWindow();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [deleteTodo] = useDeleteTodoMutation();
  const { play } = useSoundSprite();

  const getTodoId = (todoId: string) => setTodoId(todoId);

  const handleDeleteTodo = async () => {
    if (todoId !== null) {
      await deleteTodo(todoId);
      try {
        closeModal();
        toast.success(t(TodosLngKeys.TaskWasSuccessfullyDeleted, { ns: LocalesKeys.todos }));
        play({ id: SoundNamesEnum.Delete });
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
      {checkQueryParam(modalsName.editTodo) && todoId && (
        <ModalWindow title={t(TodosLngKeys.EditTodo, { ns: LocalesKeys.todos })}>
          <EditTodoForm todoId={todoId} />
        </ModalWindow>
      )}
    </>
  );
};

export default TodosPage;
