export type UploadFileProps = {
  fileName: string;
  text: string;
  operation?: any;
  buttonLabel: string;
  uploadFoo?: any;
  acceptTypes: string;
  validationSize: number;
  type: 'image' | 'video';
};

export type PreviewProps = {
  previewSource: string | ArrayBuffer;
  selectedFile: File | Blob | null;
} & Pick<UploadFileProps, 'fileName' | 'validationSize' | 'type'>;

export type SizeProps = {
  size: number;
} & Pick<UploadFileProps, 'validationSize'>;
