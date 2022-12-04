import React from 'react';
import ReactDOM from 'react-dom/client';

import EcommerceApp from './EcommerceApp';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <EcommerceApp />
      </BrowserRouter>
   </React.StrictMode> 
);


