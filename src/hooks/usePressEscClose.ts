import { useEffect } from 'react';
import { UsePressEscCloseProps } from 'types/props/UsePressEscCloseProps';

const usePressEscClose = ({ isOpen, toggle }: UsePressEscCloseProps) => {
  useEffect(() => {
    const handleEscapePress = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        toggle();
      }
    };

    document.addEventListener('keydown', handleEscapePress);
    return () => document.removeEventListener('keydown', handleEscapePress);
  }, [isOpen, toggle]);
};

export default usePressEscClose;
