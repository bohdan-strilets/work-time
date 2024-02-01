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
  const [updateTodo] = useUpdateTodoMutation();

  const onSubmit: SubmitHandler<EditTodoFormInput> = value => {
    const dto = {
      todoId: todoId ?? '',
      updateTodoDto: { task: value.task, priority: value.priority },
    };

    updateTodo(dto);
    closeModal();
    toast.success(t(TodosLngKeys.TaskWasSuccessfullyModified, { ns: LocalesKeys.todos }));
  };

  return { handleSubmit, onSubmit, register, errors, control, Controller };
};

export default useEditTodoForm;
