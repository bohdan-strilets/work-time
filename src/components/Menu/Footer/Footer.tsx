import { IoMdExit } from 'react-icons/io';
import Button from '../Button';
import { Copyright } from './Footer.styled';

const Footer: React.FC<{}> = () => {
  return (
    <>
      <Button
        height={40}
        margin="0 0 var(--large-indent) 0"
        icon={<IoMdExit size={18} />}
        label=" Exit"
      />
      <Copyright>© WorkTime 2023</Copyright>
    </>
  );
};

export default Footer;
