import './index.css';
import 'react-toastify/dist/ReactToastify.css';

import { persistor, store } from './redux/store';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import React from 'react';
import Routes from './Routes';
import { render } from 'react-dom';

render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <Routes />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
