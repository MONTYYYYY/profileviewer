import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';
import { IResult } from '../../constants/interfaces';
import { useStore } from '../../stores/UsersStore';

// import { IResult } from '../../constants/interfaces';
import ProfilePage from './styles';

function UserProfile(username : any) {
  const store :any = useStore();
  const details: IResult = store.users!.find((x:any) => x.login.username === username.userId);
  console.log('username', username);
  console.log('userProfile', store);
  console.log('details', details);
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

// "location": {
//   "street": {
//     "number": 3561,
//     "name": "Bekenespad"
//   },
//   "city": "Enkhuizen",
//   "state": "Noord-Holland",
//   "country": "Netherlands",
//   "postcode": 29329,
//   "coordinates": {
//     "latitude": "37.9509",
//     "longitude": "-36.4543"
//   },
//   "timezone": {
//     "offset": "-2:00",
//     "description": "Mid-Atlantic"
//   }
// },
// "email": "giomar.vannuland@example.com",
// "login": {
//   "uuid": "5d651393-a9f7-4baa-a79c-473288a9be20",
//   "username": "organicpeacock371",
//   "password": "iceberg",
//   "salt": "MK0DTPPz",
//   "md5": "50bd773bc5335bed5aea67d8534d3651",
//   "sha1": "ecfa69bce6f531e474149c2ff16955d65da3612e",
//   "sha256": "7d02d80352c9218ac90bfd6d2a4226894f8b72557faa87b88863eeeeffcab0b4"
// },
// "dob": {
//   "date": "1971-08-04T08:24:30.458Z",
//   "age": 50
// },
// "registered": {
//   "date": "2006-06-17T20:36:38.747Z",
//   "age": 15
// },
// "phone": "(556)-578-1075",
// "cell": "(843)-917-3626",
// "id": {
//   "name": "BSN",
//   "value": "24661530"
// },
// "picture": {
//   "large": "https://randomuser.me/api/portraits/men/16.jpg",
//   "medium": "https://randomuser.me/api/portraits/med/men/16.jpg",
//   "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg"
// },
// "nat": "NL"

export default UserProfile;
