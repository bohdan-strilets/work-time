import { ThemeEnum } from 'types/enums/ThemeEnum';
import { changeTheme } from '../redux/settings/settingsSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import { getTheme } from '../redux/settings/settingsSelectors';

const useTheme = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(getTheme);

  const handleChangeTheme = () => {
    if (theme === ThemeEnum.Light) {
      dispatch(changeTheme(ThemeEnum.Dark));
    } else {
      dispatch(changeTheme(ThemeEnum.Light));
    }
  };

  return { theme, handleChangeTheme };
};

export default useTheme;
