import { ReferenceProps } from 'types/props/ReferenceProps';
import { StyledLink } from './Reference.styled';

const Reference: React.FC<ReferenceProps> = ({ path, label, margin }) => {
  return (
    <StyledLink to={path} margin={margin}>
      {label}
    </StyledLink>
  );
};

export default Reference;
