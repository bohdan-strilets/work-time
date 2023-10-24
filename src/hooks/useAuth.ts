import { useState } from "react";
import { AuthType } from "types/types/AuthTypes";

const useAuth = () => {
  const [type, setType] = useState<AuthType>("registration");

  const changeType = () =>
    type === "registration" ? setType("login") : setType("registration");

  return { changeType, type };
};

export default useAuth;
