import styled from 'styled-components';

const Container = styled.div<{image: string}>`
    background: black url('${((props) => props.image) || 'fallback-image.jpg'}') no-repeat center;
    position : relative;
    background-size:cover;
    margin : 3px;
    width : 220px;
    height : 220px;
    color: white;
    display:flex;
    flex-direction: column;

    a { 
        display:flex;
        flex-direction :column;
        text-decoration:none;
        height:100%;
    }
    .userDetailsTop {
        flex:6;
    }
    .userDetailsBottom {
        flex:1;
        background: black;
        display:flex;
        opacity: 0.7;
        color:white;


        .name {
            flex:1;
        }
        .location {
            flex : 3;
            color: gold;
            overflow-x: auto;
            position: relative;
            top: -5px;
        }
        
        p { 
            padding: 3px;
            white-space: nowrap;
        }
    }

    :hover {
        border: 1px solid black;
        background-color: gold;
    }
`;

const MiniCard = {
  Container,
};

export default MiniCard;
