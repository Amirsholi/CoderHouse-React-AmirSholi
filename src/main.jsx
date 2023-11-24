import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-black/30 h-screen font-quicksand overflow-x-hidden'>
    <App />
    </div>
  </React.StrictMode>,
)
