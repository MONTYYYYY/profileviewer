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
        console.log('Fetching data again');
        console.log('users', userstore.users);
        userstore.setLoading(false);
        console.log('loading inner', userstore.loading);

        // setLoading(false);
      };
      fn();
    }
    console.log('inside');
  }, [userstore.loading, userstore.users]);
  return (
    <div className="App">
      <StoreProvider store={userstore}>
        <Router />
      </StoreProvider>
    </div>
  );
}

export default App;
