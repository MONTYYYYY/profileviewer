import styled from 'styled-components';

const Container = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    background: #282c25;
    overflow-y: auto;
`;

const SearchContainer = styled.div`
    display: flex;
    flex-direction : column;
    position : absolute;
    top : 10%;
    bottom : 10%;
    right : 10%;
    left : 10%;
    background: white;
    overflow-y: auto;
`;

const FilterPanelContainer = styled.div`
    display: flex;
    flex-direction : row;
    position : relative;
    flex : 1;
`;

const UsersContainer = styled.div`
    display: flex;
    flex : 6;
    flex-direction : row;
    flex-wrap: wrap;
    position : relative;
    background: white;
`;

const HomePage = {
  Container,
  SearchContainer,
  FilterPanelContainer,
  UsersContainer,
};

export default HomePage;
