import styled from 'styled-components';

const Container = styled.div<{image: string}>`
    background: black url('${((props) => props.image) || 'fallback-image.jpg'}') no-repeat center;
    position : relative;
    background-size:cover;
    margin : 2px;
    width : 100%;
    height : 100%;
    color: white;
`;

const Card = {
  Container,
};

export default Card;
