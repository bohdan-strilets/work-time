import { useState, useEffect, useRef } from "react";

const useClickOutside = () => {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const toggle = () => setIsOpen((state) => !state);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      e.stopPropagation();
      if (divRef.current && !divRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return { isOpen, toggle, divRef };
};

export default useClickOutside;
