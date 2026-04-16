import {lazy} from 'react'
import {Outlet} from "react-router-dom"

const Header = lazy(()=>import('../components/Header.jsx'))
const Footer = lazy(()=>import('../components/Footer.jsx'))

function AppLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
