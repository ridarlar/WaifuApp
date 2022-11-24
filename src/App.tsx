import Footer from './components/footer';
import Header from './components/header';
import './components/style/root.css';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import React from 'react';


function App({backgroundWaifu}:{backgroundWaifu:any}){

  const location=useLocation()
  console.log(location)

  return (
    <div >
      <Header />
      <div className='space '></div>
        {backgroundWaifu}
      <Footer />
    </div>
  );
}

export default App;
