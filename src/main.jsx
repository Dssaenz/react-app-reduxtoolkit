import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
import { PokemonApp } from './PokemonApi';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonApp />
    </Provider>
  </React.StrictMode>
)
