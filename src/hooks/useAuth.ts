import { useState } from 'react';
import { AuthEnum } from 'types/enums/AuthEnum';

const useAuth = () => {
  const [type, setType] = useState<AuthEnum>(AuthEnum.Login);

  const toggleType = () => {
    setType(prevType => (prevType === AuthEnum.Login ? AuthEnum.Registration : AuthEnum.Login));
  };

  return { toggleType, type };
};

export default useAuth;
