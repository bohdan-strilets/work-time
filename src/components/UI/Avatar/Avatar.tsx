import { AvatarProps } from 'types/props/AvatarProps';
import { Wrapper } from './Avatar.styled';

const Avatar: React.FC<AvatarProps> = ({
  url,
  alt,
  width,
  height,
  margin,
  border,
  borderRadius,
}) => {
  return (
    <Wrapper
      url={url}
      aria-label={alt}
      width={width}
      height={height}
      margin={margin}
      border={border}
      borderRadius={borderRadius}
    />
  );
};

export default Avatar;
