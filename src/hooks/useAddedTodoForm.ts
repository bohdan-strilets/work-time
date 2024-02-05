import { useTranslation } from 'react-i18next';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddedTodoFormInputs } from 'types/inputs/AddedTodoFormInputs';
import { TodosLngKeys } from 'types/locales/TodosLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { useCreateTodoMutation } from '../redux/todo/todoApi';
import { AddedTodoFormProps } from 'types/props/AddedTodoFormProps';
import useModalWindow from 'hooks/useModalWindow';
import AddedTodoFormSchema from 'validations/AddedTodoFormSchema';
import useSoundSprite from './useSoundSprite';
import { SoundNamesEnum } from 'types/enums/SoundNamesEnum';

const useAddedTodoForm = ({ dayId, selectedDate }: AddedTodoFormProps) => {
  const validation = {
    resolver: yupResolver<AddedTodoFormInputs>(AddedTodoFormSchema),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<AddedTodoFormInputs>(validation);
  const { t } = useTranslation();
  const [createTodo] = useCreateTodoMutation();
  const { closeModal } = useModalWindow();
  const { play } = useSoundSprite();

  const onSubmit: SubmitHandler<AddedTodoFormInputs> = value => {
    if (selectedDate) {
      const dto = {
        dayId: dayId ?? '',
        task: value.task,
        priority: value.priority,
        isCompleted: false,
        appointmentDate: selectedDate.toLocaleDateString(),
      };

      createTodo(dto);
      closeModal();
      toast.success(t(TodosLngKeys.TaskSuccessfullyCreated, { ns: LocalesKeys.todos }));
      play({ id: SoundNamesEnum.Success });
    }
  };

  return { handleSubmit, onSubmit, register, errors, control, Controller };
};

export default useAddedTodoForm;
