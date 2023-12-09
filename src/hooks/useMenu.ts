import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeMenu();
  };

  const handleStartClick = () => {
    navigate('auth');
    closeMenu();
  };

  return { isOpen, openMenu, closeMenu, handleBackdropClick, handleStartClick };
};

export default useMenu;
