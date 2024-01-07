import { useState } from 'react';
import { AuthEnum } from 'types/enums/AuthEnum';

const useAuth = () => {
  const [type, setType] = useState<AuthEnum>(AuthEnum.Login);

  const changeType = () =>
    type === AuthEnum.Registration ? setType(AuthEnum.Login) : setType(AuthEnum.Registration);

  return { changeType, type };
};

export default useAuth;
