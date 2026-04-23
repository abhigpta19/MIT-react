import React,{createContext} from 'react'
import { Outlet } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext.js';
import { ThemeContext } from '../contexts/ThemeContext.js';
const Navbar = React.lazy(() => import("../components/Navbar.jsx"));
const Sidebar = React.lazy(() => import("../components/Sidebar.jsx"));

function AppLayout() {
    const [user, setUser] = React.useState({name : "default"});
    const [theme, setTheme] = React.useState("light");
    
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>

        <UserContext.Provider value={{user, setUser}}>
         
           <Navbar/>

            <div style={{display: "flex"}}>
                  <Sidebar/>
                
                
                <Outlet/>
            </div>

        

      </UserContext.Provider>
    </ThemeContext.Provider>
      
  )
}

export default AppLayout
