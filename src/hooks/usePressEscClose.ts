import { useEffect } from "react";
import { UsePressEscCloseProps } from "types/props/UsePressEscCloseProps";

const usePressEscClose = ({ isOpen, toggle }: UsePressEscCloseProps) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        toggle();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, toggle]);
};

export default usePressEscClose;
