import React, { useEffect } from 'react';
import './App.css';
import Router from './routes';
import Stores from './stores';
import { StoreProvider } from './stores/UsersStore';

function App() {
  const { userstore } = Stores;
  useEffect(() => {
    if (userstore.loading) {
      const fn = async () => {
        await userstore.fetch();
        console.log('Fetching data');
        userstore.setLoading(false);
      };
      fn();
    }
  }, [userstore.loading, userstore.users, userstore]);
  return (
    <div className="App">
      <StoreProvider store={userstore}>
        <Router />
      </StoreProvider>
    </div>
  );
}

export default App;
