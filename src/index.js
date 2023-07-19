import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import MainRoutes from './Routes';
import './styles/index.css';
import axios from 'axios';
import api from './services/api';


const container = document.getElementById('root');
const root = createRoot(container);

function defineInterceptor() {
  axios.interceptors.request.use(response => {
    return response;
  }, err => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
        originalReq._retry = true;
        api.post('/auth/refresh_token', {}, { withCredentials: true }).then(res => {
          if (res.status === 200) {
            console.log('refresh token');
            localStorage.setItem('token', res.data.token);
            api.defaults.headers.Authorization = `Bearer ${res.data.token}`;
            return axios(originalReq);
          }
        }).catch(err => {
          reject(err);
        });
      }
    });
  });
}

root.render(

  <React.StrictMode>

    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
