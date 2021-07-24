export interface IResult {

    gender: string,
    name: {
        title: string,
        first: string,
        last: string
    },
    location: {
      street: {
        number: number,
        name: string
      },
      city: string,
      state: string,
      country: string,
      postcode: string,
      coordinates: {
        latitude: number,
        longitude: number
      },
      timezone: {
        offset: string,
        description: string
      }
    },
    email: string,
      login: {
        uuid: string,
        username: string,
        password: string,
        salt: string,
        md5: string,
        sha1: string,
        sha256: string
      },
      dob: {
        date: string,
        age: number
      },
      registered: {
        date: string,
        age: number
      },
      phone: string,
      cell: string,
      id: {
        name: string,
        value: string
      },
      picture: {
        large: string,
        medium: string,
        thumbnail: string
      },
      nat: string
}

// {
//     "gender": "female",
//     "name": {
//       "title": "Miss",
//       "first": "Elizabeth",
//       "last": "Taylor"
//     },
//     "location": {
//       "street": {
//         "number": 6950,
//         "name": "Station Road"
//       },
//       "city": "Salford",
//       "state": "Fife",
//       "country": "United Kingdom",
//       "postcode": "NJ8 8GX",
//       "coordinates": {
//         "latitude": "10.6602",
//         "longitude": "134.5331"
//       },
//       "timezone": {
//         "offset": "+4:30",
//         "description": "Kabul"
//       }
//     },
//     "email": "elizabeth.taylor@example.com",
//     "login": {
//       "uuid": "4e1abdb5-d04a-4371-ba43-02e284d58bba",
//       "username": "bluebear256",
//       "password": "crescent",
//       "salt": "dsOnCgEN",
//       "md5": "9082d593c96440a853127fab1fd3b427",
//       "sha1": "092be086a0658508153b47b0835f88f57e6777d7",
//       "sha256": "a1854aca9bffee4842272fe4af830534afb6d2003f9a05e6b2b2688308e9a093"
//     },
//     "dob": {
//       "date": "1992-08-17T20:28:20.861Z",
//       "age": 29
//     },
//     "registered": {
//       "date": "2004-08-17T14:00:44.771Z",
//       "age": 17
//     },
//     "phone": "016977 5269",
//     "cell": "0788-883-686",
//     "id": {
//       "name": "NINO",
//       "value": "JS 46 26 56 Z"
//     },
//     "picture": {
//       "large": "https://randomuser.me/api/portraits/women/53.jpg",
//       "medium": "https://randomuser.me/api/portraits/med/women/53.jpg",
//       "thumbnail": "https://randomuser.me/api/portraits/thumb/women/53.jpg"
//     },
//     "nat": "GB"
//   },
