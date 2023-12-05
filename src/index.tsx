import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './redux/store';
import Toastify from 'components/Toastify';
import './styles/index.css';

const rootDiv = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(rootDiv);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="work-time">
      <Provider store={store}>
        <App />
        <Toastify />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
