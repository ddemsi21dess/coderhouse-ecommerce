import React from 'react';
import ReactDOM from 'react-dom/client';

import EcommerceApp from './EcommerceApp';
import { CategoryProvider } from './context/CategoryProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
      <EcommerceApp />
    </CategoryProvider>   
  </React.StrictMode>
);


