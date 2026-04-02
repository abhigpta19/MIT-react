import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeBody from '../components/HomeBody'
import AboutBody from '../components/AboutBody'
import ContactBody from '../components/ContactBody'
import NotFound from '../components/NotFound'

function MainWebsite() 
{
    const [state, setState] = React.useState("home");

    let MiddleElement = null;
    if(state === "home")
    {
        MiddleElement = <HomeBody/>;
    }
    else if(state === "about")
    {
        MiddleElement = <AboutBody/>;
    }
    else if(state === "contact")
    {
        MiddleElement = <ContactBody/>;
    }
    else
    {
        MiddleElement = <NotFound/>;
    }


  return (
    <div>
      <Header pageChangeFn={setState}/>
        {MiddleElement}
      <Footer/>
    </div>
  )
}

export default MainWebsite
