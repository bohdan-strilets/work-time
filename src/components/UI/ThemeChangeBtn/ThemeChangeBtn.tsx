import { RiSunFill } from 'react-icons/ri';
import { BsMoonStarsFill } from 'react-icons/bs';
import { ThemeEnum } from 'types/enums/ThemeEnum';
import useTheme from 'hooks/useTheme';
import { Button } from './ThemeChangeBtn.styled';

const ThemeChangeBtn: React.FC<{}> = () => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <Button type="button" onClick={handleChangeTheme}>
      {theme === ThemeEnum.Light ? <RiSunFill size={20} /> : <BsMoonStarsFill size={20} />}
    </Button>
  );
};

export default ThemeChangeBtn;
