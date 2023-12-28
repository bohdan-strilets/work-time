import { PiArrowFatUpFill } from 'react-icons/pi';
import useScrollTop from 'hooks/useScrollTop';
import { Button } from './UpButton.styled';

const UpButton: React.FC<{}> = () => {
  const { isVisible, scrollToTop } = useScrollTop();

  return isVisible ? (
    <Button type="button" onClick={scrollToTop}>
      <PiArrowFatUpFill />
    </Button>
  ) : null;
};

export default UpButton;
