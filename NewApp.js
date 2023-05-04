import React from 'react'
import App from './App'
import { Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import Header from './components/header'

const NewApp = () => {
  return (<>
   <Header/>
   <Routes>


<Route element={<App/>} path="/"/>
<Route element={<Cart/>} path="/cart"/>


   </Routes>
  </>
  )
}

export default NewApp
