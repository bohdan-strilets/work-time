import { useEffect, useState } from 'react';
import { HookProps } from 'types/props/QuickTimingProps';

const useQuickTiming = ({ getQuickTime }: HookProps) => {
  const [selectedTime, setSelectedTime] = useState<null | string>(null);

  const handleSelectTime = (e: React.MouseEvent<HTMLButtonElement>) => {
    const time = e.currentTarget.value;
    setSelectedTime(time);
  };

  useEffect(() => {
    getQuickTime(selectedTime);
  }, [getQuickTime, selectedTime]);

  return { handleSelectTime };
};

export default useQuickTiming;
