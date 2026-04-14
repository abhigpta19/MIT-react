import React from 'react'
import AppLayout from './components/AppLayout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


export function AppHome() {
  return (
    <AppLayout>
      <Home />
    </AppLayout>
  )
}

export function AppAbout(){
  return (
    <AppLayout>
      <About/>
    </AppLayout>
  )
}

export function AppContact(){
  return (
    <AppLayout>
      <Contact/>
    </AppLayout>
  )
}

export function AppError({name}){
  return (
    <AppLayout>
      <h1>404 not found {name}</h1>
    </AppLayout>
  )
}

