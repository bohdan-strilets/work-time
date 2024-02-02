import { LoaderProps } from 'types/props/LoaderProps';
import { Wrapper, Icon, Text } from './Loader.styled';

const Loader: React.FC<LoaderProps> = ({ margin }) => {
  return (
    <Wrapper margin={margin}>
      <Text>W</Text>
      <Icon size={45} />
    </Wrapper>
  );
};

export default Loader;
