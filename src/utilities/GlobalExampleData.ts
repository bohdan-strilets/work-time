import { WorkUserDataType } from "types/types/WorkUserDataType";
import { Status } from "types/enums/StatusEnum";

const WorkUserData: WorkUserDataType[] = [
  {
    id: "1",
    data: {
      "31-10-2023": {
        status: Status.work,
        numberHoursWorked: 12,
        time: "06:00-18:00",
        workShiftNumber: 1,
        additionalHours: false,
      },
    },
  },
  {
    id: "2",
    data: {
      "01-11-2023": {
        status: Status.dayOff,
        numberHoursWorked: 0,
        time: "",
        workShiftNumber: 0,
        additionalHours: false,
      },
    },
  },
  {
    id: "3",
    data: {
      "02-11-2023": {
        status: Status.dayOff,
        numberHoursWorked: 0,
        time: "",
        workShiftNumber: 0,
        additionalHours: false,
      },
    },
  },
  {
    id: "3",
    data: {
      "03-11-2023": {
        status: Status.work,
        numberHoursWorked: 12,
        time: "18:00-6:00",
        workShiftNumber: 2,
        additionalHours: false,
      },
    },
  },
  {
    id: "4",
    data: {
      "04-11-2023": {
        status: Status.work,
        numberHoursWorked: 12,
        time: "18:00-6:00",
        workShiftNumber: 2,
        additionalHours: false,
      },
    },
  },
  {
    id: "5",
    data: {
      "05-11-2023": {
        status: Status.work,
        numberHoursWorked: 12,
        time: "18:00-6:00",
        workShiftNumber: 2,
        additionalHours: true,
      },
    },
  },
  {
    id: "6",
    data: {
      "06-11-2023": {
        status: Status.dayOff,
        numberHoursWorked: 0,
        time: "",
        workShiftNumber: 0,
        additionalHours: false,
      },
    },
  },
  {
    id: "7",
    data: {
      "07-11-2023": {
        status: Status.dayOff,
        numberHoursWorked: 0,
        time: "",
        workShiftNumber: 0,
        additionalHours: false,
      },
    },
  },
  {
    id: "8",
    data: {
      "08-11-2023": {
        status: Status.vacation,
        numberHoursWorked: 12,
        time: "06:00-18:00",
        workShiftNumber: 1,
        additionalHours: false,
      },
    },
  },
  {
    id: "9",
    data: {
      "09-11-2023": {
        status: Status.vacation,
        numberHoursWorked: 12,
        time: "06:00-18:00",
        workShiftNumber: 1,
        additionalHours: false,
      },
    },
  },
  {
    id: "10",
    data: {
      "10-11-2023": {
        status: Status.work,
        numberHoursWorked: 12,
        time: "6:00-18:00",
        workShiftNumber: 1,
        additionalHours: true,
      },
    },
  },
  {
    id: "11",
    data: {
      "11-11-2023": {
        status: Status.work,
        numberHoursWorked: 8,
        time: "6:00-14:00",
        workShiftNumber: 1,
        additionalHours: true,
      },
    },
  },
  {
    id: "12",
    data: {
      "12-11-2023": {
        status: Status.dayOff,
        numberHoursWorked: 0,
        time: "",
        workShiftNumber: 0,
        additionalHours: false,
      },
    },
  },
  {
    id: "13",
    data: {
      "13-11-2023": {
        status: Status.sickLeave,
        numberHoursWorked: 12,
        time: "18:00-06:00",
        workShiftNumber: 2,
        additionalHours: false,
      },
    },
  },
  {
    id: "14",
    data: {
      "14-11-2023": {
        status: Status.sickLeave,
        numberHoursWorked: 12,
        time: "18:00-06:00",
        workShiftNumber: 2,
        additionalHours: false,
      },
    },
  },
];

export default WorkUserData;
