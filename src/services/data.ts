import axios from 'axios';
import { IResult } from '../constants/interfaces';

const getUsers = async () : Promise<IResult[]> => {
  let response :IResult[] = [];
  try {
    const data = await axios.get('https://randomuser.me/api/?results=50');
    response = data?.data.results || [];
    return response;
  } catch (error) {
    console.error(error);
  }
  return [];
};

const Data = {
  getUsers,
};
export default Data;
