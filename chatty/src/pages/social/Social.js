import React from 'react'
import "./Social.scss"
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/Header';
const Social = () => {
  return (
    <>
      <div><Header/></div>
      <div className='dashboard'> {/* fixed here */}
        <div className='dashboard-sidebar'>
          <div>Sidebar</div>
        </div>
        <div className='dashboard-content'>
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default Social
