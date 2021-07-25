import axios from 'axios';
import {
  makeObservable,
  observable,
  computed,
  action,
  flow,
} from 'mobx';
import React from 'react';
import Collections from '../constants/Collections';
import { IResult } from '../constants/interfaces';

class Users {
    users: IResult[] = []

    query: string= '';

    key: string = '';

    order : 'ASC'| 'DESC' = 'ASC' // Ascending by default

    loading : boolean = true;

    constructor() {
      makeObservable(this, {
        users: observable,
        key: observable,
        order: observable,
        query: observable,
        loading: observable,
        UsersFilteredByQuery: computed,
        fetch: flow.bound,
        setLoading: action.bound,
        setQuery: action.bound,
        setSearchCriteria: action.bound,
      });
    }

    setLoading(value : boolean) {
      this.loading = value;
    }

    setQuery(text: string) {
      this.query = text;
    }

    setSearchCriteria(values : { profiles : any [], key : string, order: 'ASC'| 'DESC'}) {
      this.key = values.key;
      this.order = values.order;
      this.users = Collections.sortByNestedChildProperty(values.profiles, values.key, values.order);
    }

    get UsersFilteredByQuery() {
      if (this.query.length === 0) {
        return this.users;
      }
      const data = this.users.filter((user) => (
        String(user.name.first).toLocaleLowerCase().includes(this.query.toLocaleLowerCase())
        || String(user.name.last).toLocaleLowerCase().includes(this.query.toLocaleLowerCase())
        || `${user.name.first} ${user.name.last}`.toLocaleLowerCase().includes(this.query.toLocaleLowerCase())
      ));
      return data;
    }

    * fetch() {
      try {
        this.loading = true;
        console.log('loading profiles data ....');
        const { data: { results } } = yield axios.get('https://randomuser.me/api/?results=50');
        this.users = results;
        this.loading = false;
      } catch (error) {
        console.log('err', error);
      }
    }
}

/* Store helpers */
const StoreContext = React.createContext({});
interface IStoreProvider {
  children : any;
  store : any;
}
export const StoreProvider = ({ children, store }: IStoreProvider) => (
  <StoreContext.Provider value={store}>
    {children}
  </StoreContext.Provider>
);

/* Hook to use store in any functional component */
export const useStore = () => React.useContext(StoreContext);

/* HOC to inject store to any functional or class component */
export const withStore = (Component:any) => (props:any) => (
  <Component
    {...props}
    store={useStore()}
  />
);

export default Users;
