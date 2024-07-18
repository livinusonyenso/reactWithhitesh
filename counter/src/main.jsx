import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Bgchanger from './component/Bgchanger.jsx'
import PasswordGenerator from './component/PasswordGenerator.jsx'
import CurrencyConverter from './component/currencyConverter /CurrencyConverter.jsx'
import Pofile from './component/contextAPI/Pofile.jsx'
import './index.css'
import Login from './component/contextAPI/Login.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    {/* <App /> */}
    {/* <Bgchanger/> */}
    {/* <PasswordGenerator /> */}
    {/* <CurrencyConverter/> */}
   <Login/>
    </UserContextProvider>
  </React.StrictMode>,
)
