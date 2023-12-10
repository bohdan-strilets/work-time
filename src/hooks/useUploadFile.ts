import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { UserResponseType } from 'types/types/UserResponseType';
import { UserType } from 'types/types/UserType';

const useUploadFile = (onClose: () => void, fileName: string, operation?: any, uploadFoo?: any) => {
  const dispatch = useAppDispatch();
  const hiddenFileInput = useRef<HTMLInputElement>(null);
  const { postId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [fileInputState, setFileInputState] = useState('');
  const [selectedFile, setSelectedFile] = useState<null | File | Blob>(null);
  const [previewSource, setPreviewSource] = useState<string | ArrayBuffer | null>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedFile) {
      previewFile(selectedFile);
      setIsLoading(true);
      const payload = new FormData();
      payload.append(fileName, selectedFile);

      if (!payload) return;
      if (operation) {
        const response = await dispatch(operation(payload));
        const data = response.payload as UserResponseType<UserType>;

        if (data && data.success) {
          onClose();
          setIsLoading(false);
        }
      }
      if (uploadFoo) {
        await uploadFoo({ file: payload, postId });
        setIsLoading(false);
      }
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    hiddenFileInput?.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = (e.target.files as FileList)[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  return {
    handleSubmit,
    previewSource,
    handleFileInputChange,
    fileInputState,
    isLoading,
    hiddenFileInput,
    handleClick,
    selectedFile,
  };
};

export default useUploadFile;
