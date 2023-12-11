import { LinkButtonProps } from 'types/props/LinkButtonProps';
import { Button } from './LinkButton.styled';

const LinkButton: React.FC<LinkButtonProps> = ({ children, margin, onClick }) => {
  return (
    <Button type="button" onClick={onClick} margin={margin}>
      {children}
    </Button>
  );
};

export default LinkButton;
