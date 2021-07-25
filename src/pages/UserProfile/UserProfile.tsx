import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { IResult } from '../../constants/interfaces';
import { useStore } from '../../stores/UsersStore';
import ProfilePage from './styles';

function UserProfile(username : any) {
  const store :any = useStore();
  const details: IResult = store.users?.find((x:any) => x.login.username === username.userId);

  const {
    name: { title, first, last },
    gender,
    location: {
      street: { number, name },
      city,
      state,
      country,
      postcode,
      coordinates: { latitude, longitude },
      timezone: { offset, description },
    },
    email,
    dob: { age, date },
    login,
    phone,
    cell,
    picture: { large },

  } = details;

  const userInfo : {label: string, value : string}[] = [
    { label: 'Full Name', value: `${title} ${first} ${last}` },
    { label: 'Username', value: `${login.username}` },
    { label: 'Age', value: `${age}` },
    { label: 'D.O.B', value: `${new Date(date)}` },
    { label: 'Gender', value: gender },
    { label: 'Street', value: `${number},${name}` },
    { label: 'Gender', value: gender },
    { label: 'City', value: city },
    { label: 'State', value: state },
    { label: 'Country', value: country },
    { label: 'Post Code', value: postcode },
    { label: 'Coordinates', value: `lat :${latitude} long. : ${longitude}` },
    { label: 'Timezone', value: `Offset: ${offset} , desc. : ${description}` },
    { label: 'Email', value: email },
    { label: 'Phone', value: phone },
    { label: 'Cell', value: cell },
  ];

  return (
    <ProfilePage.Container>
      <Link to="/">
        <p>
          <FaUsers color="white" size={30} />
        </p>
      </Link>
      <ProfilePage.TableWrapper>
        <ProfilePage.ImageContainer image={large} />
        <table className="fl-table">
          <thead>
            <tr>
              <th>Criteria</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            { userInfo.map((info) => (
              <tr>
                <td>{info.label}</td>
                <td>
                  {info.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ProfilePage.TableWrapper>
    </ProfilePage.Container>
  );
}

export default UserProfile;
