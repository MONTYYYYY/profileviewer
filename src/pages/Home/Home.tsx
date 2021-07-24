import React from 'react';
import { observer } from 'mobx-react-lite';
import HomePage from './styles';
// import Stores from '../../stores/index';
import Card from '../../components/UserMiniCard/UserMiniCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useStore } from '../../stores/UsersStore';

const Home = observer(() => {
  const store: any = useStore();
  console.log('store Home', store.users);
  console.log('queryhass', store.query.length > 0 && store.UsersFilteredByQuery);

  const UserContainer = () => (
    <HomePage.UsersContainer>
      {
        (store.query.length > 0
          ? store.UsersFilteredByQuery : store.users)?.map((user:any) => (
            <Card
              id={user.login.username}
              name={user.name}
              image={user.picture.large}
              location={user.location.city}
            />
        ))
      }
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
