import React from 'react';
// import { GrLocation } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import MiniCard from './styles';

interface MiniCardProps {
  id: string,
  name: {
    first: string,
    last : string,
    title: string,
  };
  image: string;
  location : string;
}
function UserMiniCard({
  id, name, image, location,
}: MiniCardProps) {
  return (
    <MiniCard.Container key={id} image={image}>
      <Link className="userDetails" to={`/profile/${id}`}>
        <div className="userDetailsTop">
          <p> </p>
        </div>
        <div className="userDetailsBottom">
          <p className="name">{ name.first }</p>
          <p className="name">{ name.last }</p>
          <p className="location">
            📍
            { location }
          </p>
        </div>
      </Link>
    </MiniCard.Container>
  );
}

export default UserMiniCard;
