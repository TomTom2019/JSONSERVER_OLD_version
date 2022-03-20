import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import MainLayout from './hoc/mainLayout'

import Home from './components/home'
import Header from './components/header'
import Post from './components/posts'
import Contact from './components/contact'

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Switch>
          <Route path='/article/:id' component={Post} />
          <Route path='/contact' component={Contact} />
          <Route path='/' exact component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  )
}

export default Routes
