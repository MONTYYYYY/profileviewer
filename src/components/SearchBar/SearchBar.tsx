import React, { useState } from 'react';
import { OPTIONS } from '../../constants/Collections';
import SearchPanel from './styles';
import Images from '../../assets/index';

interface ISearchBoxProps {
  userStore : any

}
const SearchBox = ({ userStore }:ISearchBoxProps) => {
  const [searchText, setSearchText] = useState('');
  const handleTextChange = (e:any) => {
    setSearchText(e.target.value);
    userStore.setQuery(e.target.value);
    console.log('queryText', userStore.query);
  };

  return (
    <SearchPanel.SearchInputContainer>
      <input
        style={
          {
            backgroundSize: 15, backgroundPosition: '490px 10px', backgroundRepeat: 'no-repeat', backgroundImage: `url('${Images.SearchInputIcon}')`,
          }
        }
        name="searchBox"
        placeholder="Search Profile"
        value={searchText}
        onChange={(e:any) => handleTextChange(e)}
      />
    </SearchPanel.SearchInputContainer>
  );
};

interface ISearchBarProps {
  userStore : any
}
const SearchBar = ({ userStore }:ISearchBarProps) => {
  const [sortByCriteria, setSortByCritera] = useState<any>({ label: '⇳ Sort By', value: 'none_none' });
  const hasSortCriteria = Array.isArray(sortByCriteria) ? sortByCriteria[0].value !== 'none_none' : sortByCriteria.value !== 'none_none';
  const [criteriaId, direction] = hasSortCriteria ? sortByCriteria[0].value.split('_') : [{ label: 'SortBy', value: 'none_none' }];
  const directionEnum = direction === 'ASC' ? 'ASC' : 'DESC';

  const handleSort = (values:any, profiles: any[]) => {
    setSortByCritera(values);
    console.log('handleSort', values);
    console.log('criteriaId', criteriaId);
    console.log('directionEnum', directionEnum);
    const [key, order] = values[0].value.split('_');
    console.log('key, order', key, order);
    userStore.setSearchCriteria({ profiles, key, order });
  };

  // Sort by to trigger mobx value
  return (
    <SearchPanel.Container>
      <div className="innerContainer">
        <SearchBox userStore={userStore} />
      </div>
      <div className="innerContainer">
        <SearchPanel.StyledSelect
          options={OPTIONS.profile}
          values={[sortByCriteria]}
          className="col inputSelector"
          dropdownGap={2}
          color="#0074D9"
          searchable={false}
          keepSelectedInList
          onChange={(values:any) => handleSort(values, userStore.users)}
        />
      </div>
    </SearchPanel.Container>
  );
};

export default SearchBar;
