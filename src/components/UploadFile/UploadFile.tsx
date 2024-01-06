import { useTranslation } from 'react-i18next';
import { IoMdCloudUpload } from 'react-icons/io';
import Button from 'components/UI/Button';
import Loader from 'components/UI/Loader';
import Preview from './Preview';
import useModalWindow from 'hooks/useModalWindow';
import useUploadFile from 'hooks/useUploadFile';
import { UploadFileProps } from 'types/props/UploadFileProps';
import { CommonLngKeys } from 'types/locales/CommonLngKeys';
import { LocalesKeys } from 'types/enums/LocalesKeys';
import { Text, Label, Input, UploadButton, UploadButtonLabel } from './UploadFile.styled';

const UploadFile: React.FC<UploadFileProps> = ({
  fileName,
  text,
  operation,
  buttonLabel,
  uploadFoo,
  acceptTypes,
  validationSize,
  type,
}) => {
  const { closeModal } = useModalWindow();
  const {
    handleSubmit,
    fileInputState,
    handleClick,
    handleFileInputChange,
    hiddenFileInput,
    isLoading,
    previewSource,
    selectedFile,
  } = useUploadFile(closeModal, fileName, operation, uploadFoo);
  const { t } = useTranslation();

  return (
    <form encType="multipart/from-data" onSubmit={handleSubmit}>
      <Text>{text}</Text>
      <Label>
        <Input
          type="file"
          name={fileName}
          ref={hiddenFileInput}
          multiple
          accept={acceptTypes}
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <UploadButton type="button" onClick={handleClick}>
          <IoMdCloudUpload size={50} />
          <UploadButtonLabel>
            {t(CommonLngKeys.Select, { ns: LocalesKeys.common })}
          </UploadButtonLabel>
        </UploadButton>
      </Label>
      {previewSource && (
        <Preview
          fileName={fileName}
          previewSource={previewSource}
          selectedFile={selectedFile}
          validationSize={validationSize}
          type={type}
        />
      )}
      {isLoading && <Loader margin="var(--medium-indent) 0 0 0" />}
      <Button type="submit" label={buttonLabel} height="40px" width="300px" />
    </form>
  );
};

export default UploadFile;
