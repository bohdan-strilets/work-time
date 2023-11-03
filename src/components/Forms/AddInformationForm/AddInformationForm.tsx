import Button from "components/UI/Button";
import useAddInformationForm from "hooks/useAddInformationForm";

const AddInformationForm: React.FC<{}> = () => {
  const { register, handleSubmit, errors, onSubmit } = useAddInformationForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>Выберети к какому типу принадлежит день</p>
        <select>
          <option value="work">Work day</option>
          <option value="day-off">Day off</option>
          <option value="vacation">Vacation</option>
          <option value="sick-leave">Sick leave</option>
        </select>
      </label>
      <label>
        <p>Начало смены</p>
        <select>
          <option value={0}>00:00</option>
          <option value={1}>01:00</option>
          <option value={2}>02:00</option>
          <option value={3}>03:00</option>
          <option value={4}>04:00</option>
          <option value={5}>05:00</option>
          <option value={6}>06:00</option>
          <option value={7}>07:00</option>
          <option value={8}>08:00</option>
          <option value={9}>09:00</option>
          <option value={10}>10:00</option>
          <option value={11}>11:00</option>
          <option value={12}>12:00</option>
          <option value={13}>13:00</option>
          <option value={14}>14:00</option>
          <option value={15}>15:00</option>
          <option value={16}>16:00</option>
          <option value={17}>17:00</option>
          <option value={18}>18:00</option>
          <option value={19}>19:00</option>
          <option value={20}>20:00</option>
          <option value={21}>21:00</option>
          <option value={22}>22:00</option>
          <option value={23}>23:00</option>
        </select>
        <p>Конец смены</p>
        <select>
          <option value={0}>00:00</option>
          <option value={1}>01:00</option>
          <option value={2}>02:00</option>
          <option value={3}>03:00</option>
          <option value={4}>04:00</option>
          <option value={5}>05:00</option>
          <option value={6}>06:00</option>
          <option value={7}>07:00</option>
          <option value={8}>08:00</option>
          <option value={9}>09:00</option>
          <option value={10}>10:00</option>
          <option value={11}>11:00</option>
          <option value={12}>12:00</option>
          <option value={13}>13:00</option>
          <option value={14}>14:00</option>
          <option value={15}>15:00</option>
          <option value={16}>16:00</option>
          <option value={17}>17:00</option>
          <option value={18}>18:00</option>
          <option value={19}>19:00</option>
          <option value={20}>20:00</option>
          <option value={21}>21:00</option>
          <option value={22}>22:00</option>
          <option value={23}>23:00</option>
        </select>
      </label>
      <label>
        <p>Выберети номер смены</p>
        <select>
          <option value={1}>I</option>
          <option value={2}>II</option>
        </select>
      </label>
      <label>
        <p>Укажите если смена была дополнительной</p>
        <input type="checkbox" />
      </label>

      <Button type="submit" label="Add day" width="400px" height="40px" />
    </form>
  );
};

export default AddInformationForm;
