import React from 'react';
import App from './app/app';
import './styles/index.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <HelmetProvider>
               <App />
            </HelmetProvider>
         </BrowserRouter>
      </Provider>
   </React.StrictMode>
);
