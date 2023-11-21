export type AvatarProps = {
  url: string;
  alt: string;
  width?: string;
  height?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
};

export type WrapperProps = Pick<
  AvatarProps,
  'url' | 'width' | 'height' | 'margin' | 'border' | 'borderRadius'
>;
