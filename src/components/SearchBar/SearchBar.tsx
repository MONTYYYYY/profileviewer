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
  const handleSort = (values:any, profiles: any[]) => {
    setSortByCritera(values);
    const [key, order] = values[0].value.split('_');
    userStore.setSearchCriteria({ profiles, key, order });
  };

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
