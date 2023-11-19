import { useState } from 'react';

const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);

  const closeMenu = () => setIsOpen(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeMenu();
  };

  return { isOpen, openMenu, closeMenu, handleBackdropClick };
};

export default useMenu;
