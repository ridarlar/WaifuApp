import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Routes, Route} from 'react-router-dom'
import Background from './components/background';

const propsUri={
  type:'sfw',
  category:'neko',
  unique:false
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Routes>
          <Route path="/waifu-app/:type/:category" element={

          }
          />
        </Routes>
    <App
    backgroundWaifu={
      <Background {
        ...propsUri
      }
    }
    />
  </React.StrictMode>
);

