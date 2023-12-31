import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';
import { store } from './redux/store';
import Toastify from 'components/Toastify';
import './styles/index.css';
import './locales/config';

const rootDiv = document.getElementById('root') as HTMLDivElement;
const root = ReactDOM.createRoot(rootDiv);
const googleClientId = '1066070095414-aiovio3vb4llh46v7ou3stti9gvej03p.apps.googleusercontent.com';

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={googleClientId}>
          <App />
          <Toastify />
        </GoogleOAuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
