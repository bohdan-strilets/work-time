import { LoaderProps } from 'types/props/LoaderProps';
import { Wrapper, Icon } from './Loader.styled';

const Loader: React.FC<LoaderProps> = ({ margin }) => {
  return (
    <Wrapper margin={margin}>
      <Icon size={35} />
    </Wrapper>
  );
};

export default Loader;
