import React,{createContext} from 'react'
import { Outlet } from 'react-router-dom';
import { UserProvider } from '../contexts/UserContext.js';
import { ThemeProvider } from '../contexts/ThemeContext.js';
const Navbar = React.lazy(() => import("../components/Navbar.jsx"));
const Sidebar = React.lazy(() => import("../components/Sidebar.jsx"));

function AppLayout() {
    
  return (
    <ThemeProvider>

        <UserProvider>
         
           <Navbar/>

            <div style={{display: "flex"}}>
                  <Sidebar/>
                
                
                <Outlet/>
            </div>

        

      </UserProvider>
    </ThemeProvider>
      
  )
}

export default AppLayout
