import Media from 'react-media';
import ScreenWidth from 'utilities/ScreenWidth';
import Mobile from './Responsiv/Mobile';
import Tablet from './Responsiv/Tablet';
import Desktop from './Responsiv/Desktop';
import { ProfileProps } from 'types/props/ProfileProps';

const Profile: React.FC<ProfileProps> = ({
  name,
  isActivated,
  email,
  gender,
  dateBirth,
  age,
  companyName,
  profession,
  startWork,
  workExperience,
  salaryPerHour,
  alt,
  avatarUrl,
}) => {
  return (
    <>
      <Media
        queries={{
          small: `(max-width: ${ScreenWidth.preTablet})`,
          medium: `(min-width: ${ScreenWidth.tablet}) and (max-width: ${ScreenWidth.preDesktop})`,
          large: `(min-width: ${ScreenWidth.desktop})`,
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <Mobile
                name={name}
                isActivated={isActivated}
                email={email}
                gender={gender}
                dateBirth={dateBirth}
                age={age}
                companyName={companyName}
                profession={profession}
                startWork={startWork}
                workExperience={workExperience}
                salaryPerHour={salaryPerHour}
                alt={alt}
                avatarUrl={avatarUrl}
              />
            )}
            {matches.medium && (
              <Tablet
                name={name}
                isActivated={isActivated}
                email={email}
                gender={gender}
                dateBirth={dateBirth}
                age={age}
                companyName={companyName}
                profession={profession}
                startWork={startWork}
                workExperience={workExperience}
                salaryPerHour={salaryPerHour}
                alt={alt}
                avatarUrl={avatarUrl}
              />
            )}
            {matches.large && (
              <Desktop
                name={name}
                isActivated={isActivated}
                email={email}
                gender={gender}
                dateBirth={dateBirth}
                age={age}
                companyName={companyName}
                profession={profession}
                startWork={startWork}
                workExperience={workExperience}
                salaryPerHour={salaryPerHour}
                alt={alt}
                avatarUrl={avatarUrl}
              />
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default Profile;
