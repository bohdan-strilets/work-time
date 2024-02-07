import axios, { AxiosError } from 'axios';
import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { EditTodoFormInput } from 'types/inputs/EditTodoFormInput';
import EditTodoFormSchema from 'validations/EditTodoFormSchema';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import useModalWindow from 'hooks/useModalWindow';
import { useUpdateTodoMutation } from '../redux/todo/todoApi';
import { HookProps } from 'types/props/EditTodoFormProps';
import { useGetOneTodoQuery } from '../redux/todo/todoApi';
import { TodosResponseType } from 'types/types/TodosResponseType';
import CustomErrorHandler from 'utilities/CustomErrorHandler';
import { ErrorLngKeys } from 'types/locales/ErrorsLngKeys';

const useEditTodoForm = ({ todoId }: HookProps) => {
  const validation = {
    resolver: yupResolver<EditTodoFormInput>(EditTodoFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<EditTodoFormInput>(validation);
  const { t } = useTranslation();
  const { closeModal } = useModalWindow();
  const [updateTodo, { isLoading: isUpdateLoading }] = useUpdateTodoMutation();
  const { data, isLoading } = useGetOneTodoQuery(todoId);
  const todo = data?.data;

  const onSubmit: SubmitHandler<EditTodoFormInput> = async value => {
    const dto = {
      todoId: todoId ?? '',
      updateTodoDto: { task: value.task, priority: value.priority },
    };

    await updateTodo(dto);
    try {
      closeModal();
      toast.success(t(TodosLngKeys.TaskWasSuccessfullyModified, { ns: LocalesKeys.todos }));
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

  return {
    handleSubmit,
    onSubmit,
    register,
    errors,
    control,
    Controller,
    todo,
    isLoading,
    isUpdateLoading,
  };
};

export default useEditTodoForm;
