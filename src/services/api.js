/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

const token = localStorage.getItem('token');

console.log(token);

export default axios.create({
  baseURL: 'http://localhost:8000/api/v1/users/',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  }
})