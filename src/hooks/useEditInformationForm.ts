import { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { EditInformationFormInputs } from "types/inputs/EditInformationFormInputs";
import { HookProps } from "types/props/EditInformationFormProps";
import { WorkUserDataType } from "types/types/WorkUserDataType";
import GetKeyByDate from "utilities/GetKeyByDate";
import { DayInfoType } from "types/types/WorkUserDataType";
import useLocalStorage from "./useLocalStorage";
import { keys } from "settings/config";
import CalculateWorkedHours from "utilities/CalculateWorkedHours";

const useEditInformationForm = ({ dayId, selectedDate }: HookProps) => {
  const [dayInfo, setDayInfo] = useState<DayInfoType | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<EditInformationFormInputs>();
  const { getDataFromLs, setDataToLs } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const dataFromLs: WorkUserDataType[] = getDataFromLs(
      keys.WORKING_DAYS_KEY_LS
    );
    const result = dataFromLs.find((item) => item.id === dayId);
    if (selectedDate && result) {
      const key = GetKeyByDate(selectedDate);
      const dayInfo = result.data[key];
      setDayInfo(dayInfo);
    }
  }, [dayId, selectedDate]);

  const onSubmit: SubmitHandler<EditInformationFormInputs> = (data) => {
    if (selectedDate) {
      const key = GetKeyByDate(selectedDate);
      if (data.startJob && data.finishJob) {
        const workedHours = CalculateWorkedHours(data.startJob, data.finishJob);
        const result = {
          id: Date.now(),
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: workedHours,
              time: `${data.startJob}-${data.finishJob}`,
              workShiftNumber: Number(data.workShiftNumber),
              additionalHours: data.additionalHours,
            },
          },
        };
        const dataFromLs: WorkUserDataType[] = getDataFromLs(
          keys.WORKING_DAYS_KEY_LS
        );
        const filtredDataFromLs = dataFromLs.filter(
          (item) => item.id !== dayId
        );
        const dataToLs = [...filtredDataFromLs, result];
        setDataToLs(keys.WORKING_DAYS_KEY_LS, dataToLs);
      } else {
        const result = {
          id: Date.now(),
          data: {
            [key]: {
              status: data.status,
              numberHoursWorked: 0,
              time: "-",
              workShiftNumber: 0,
              additionalHours: false,
            },
          },
        };
        const dataFromLs: WorkUserDataType[] = getDataFromLs(
          keys.WORKING_DAYS_KEY_LS
        );
        const filtredDataFromLs = dataFromLs.filter(
          (item) => item.id !== dayId
        );
        const dataToLs = [...filtredDataFromLs, result];
        setDataToLs(keys.WORKING_DAYS_KEY_LS, dataToLs);
      }
    }
    navigate("/calendar");
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    Controller,
    control,
    dayInfo,
  };
};

export default useEditInformationForm;
