import styled from 'styled-components';
import Select from 'react-dropdown-select';

const Container = styled.div`
    position : relative;
    margin : 2px;
    width : 100%;
    // background: yellow;
    display: flex;

    .innerContainer {
        flex : 1;
        // background : pink;
        margin : 5px;
    }
`;

export const StyledSelect = styled(Select)`
  ${({ dropdownRenderer } :any) => dropdownRenderer
  && `
  .react-dropdown-select-dropdown {
    overflow: initial;
    height: 100%;

  }
  input {
    text-align:center;
    font-size:13px;
  }
  .react-dropdown-select {
    background:black;
    color: white;
  }
`}`;

const SearchInputContainer = styled.div`
  width:100%;
  height:100%;
  input {
    width:100%;
    height: 30px;
    text-align:center;
  }
`;

const SearchPanel = {
  Container,
  StyledSelect,
  SearchInputContainer,
};

export default SearchPanel;
