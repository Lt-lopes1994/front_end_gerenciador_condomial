/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8000/api/v1/',
  headers: {
    'Content-type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  }
})