import Media from 'react-media';
import ScreenWidth from 'utilities/defaultData/ScreenWidth';
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
  userId,
  description,
  settings,
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
                userId={userId}
                description={description}
                settings={settings}
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
                userId={userId}
                description={description}
                settings={settings}
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
                userId={userId}
                description={description}
                settings={settings}
              />
            )}
          </>
        )}
      </Media>
    </>
  );
};

export default Profile;
