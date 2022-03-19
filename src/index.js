import './index.css';

import { QueryClient, QueryClientProvider } from 'react-query';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Routes from './Routes';
import { render } from 'react-dom';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 15 * 60 * 1000,
    },
  },
});

render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
