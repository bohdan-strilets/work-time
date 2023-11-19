import { GrClose } from 'react-icons/gr';
import { HeaderProps } from 'types/props/MenuHeaderProps';
import Button from '../Button';
import { Wrapper, Logo } from './Header.styled';

const Header: React.FC<HeaderProps> = ({ closeMenu }) => {
  return (
    <Wrapper>
      <Logo>WORKTIME</Logo>
      <Button width={28} height={28} handleClick={closeMenu} icon={<GrClose />} />
    </Wrapper>
  );
};

export default Header;
