import { useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const useModalWindow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const modalsName = {
    cellDay: 'cell-day',
    cellDayEdit: 'cell-day-edit',
    cellDayDelete: 'cell-day-delete',
    greetings: 'greetings',
    termsUseSite: 'terms-use-site',
    privacyPolicy: 'privacy-policy',
    editProfile: 'edit-profile',
    uploadAvatar: 'upload-avatar',
    editEmail: 'edit-email',
    editPassword: 'edit-password',
    requestPasswordReset: 'request-password-reset',
    repeatActivationEmail: 'repeat-activation-email',
    deleteProfile: 'delete-profile',
  };

  const openModal = (modalName: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('modal', modalName);
    setSearchParams(updatedParams);
  };

  const closeModal = useCallback(() => navigate(-1), [navigate]);

  const checkQueryParam = (modalName: string) => {
    const modal = searchParams.get('modal');
    return modal === modalName;
  };

  const backdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  useEffect(() => {
    const onPressEscape = (e: KeyboardEvent) => {
      if (e.code === 'Escape') navigate(-1);
    };

    document.addEventListener('keydown', onPressEscape);
    return () => document.removeEventListener('keydown', onPressEscape);
  }, [navigate]);

  return {
    modalsName,
    openModal,
    closeModal,
    checkQueryParam,
    backdropClick,
  };
};

export default useModalWindow;
