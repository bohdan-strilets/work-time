export type EditInformationFormProps = {
  dayId: string | null;
  selectedDate: Date | null;
};

export type HookProps = Pick<
  EditInformationFormProps,
  "dayId" | "selectedDate"
>;
