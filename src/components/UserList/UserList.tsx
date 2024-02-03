import Item from './Item';
import Placeholder from 'components/Placeholder';
import { useAppSelector } from 'hooks/useAppSelector';
import { getAllUsers } from '../../redux/user/userSelectors';
import useChart from 'hooks/useChart';

const UserList: React.FC<{}> = () => {
  const users = useAppSelector(getAllUsers);
  const { calculateStatisticsByMonth } = useChart({});

  return (
    <ul>
      {users ? (
        users.map(i => {
          const numberWorkingHours = calculateStatisticsByMonth(
            i.statistics.statisticsByMonths.numberWorkingHours,
          );
          return (
            <Item
              key={i._id}
              avatarUrl={i.avatarUrl}
              name={`${i.firstName} ${i.lastName}`}
              userId={i._id}
              gender={i.gender}
              dateBirth={i.dateBirth}
              registrationDate={i.createdAt}
              startWorkDate={i.companyInfo.startWork}
              companyName={i.companyInfo.companyName}
              profession={i.companyInfo.profession}
              numberWorkingHours={numberWorkingHours}
              description={i.description}
            />
          );
        })
      ) : (
        <Placeholder />
      )}
    </ul>
  );
};

export default UserList;
