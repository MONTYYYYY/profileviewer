import React from 'react';
import { observer } from 'mobx-react-lite';
import { BiSad } from 'react-icons/bi';
import HomePage from './styles';
import Card from '../../components/UserMiniCard/UserMiniCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useStore } from '../../stores/UsersStore';

const Home = observer(() => {
  const store: any = useStore();
  const userData = (store.query.length > 0 ? store.UsersFilteredByQuery : store.users);
  const noDataFound:boolean = store.query.length > 0 && store.UsersFilteredByQuery.length === 0;

  const UserContainer = () => (
    <HomePage.UsersContainer>
      {
        userData?.map((user:any) => (
          <Card
            id={user.login.username}
            name={user.name}
            image={user.picture.large}
            location={user.location.city}
          />
        ))
      }
      { noDataFound && (
        <p className="noDataText">
          <BiSad size={30} color="blue" />
          No User Data available/matched ...
        </p>
      )}
    </HomePage.UsersContainer>
  );

  return (
    <HomePage.Container>
      <HomePage.SearchContainer>
        <HomePage.FilterPanelContainer>
          <SearchBar userStore={store} />
        </HomePage.FilterPanelContainer>
        <UserContainer />
      </HomePage.SearchContainer>
    </HomePage.Container>
  );
});

export default Home;
