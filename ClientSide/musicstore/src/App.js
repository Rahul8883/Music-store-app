import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './component/Navbar';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import AddMusic from './component/Music/AddMusic';
import MusicList from './component/Music/musicList';
import Allmusic from './component/Music/allmusic';
import CartItem from './component/Cart/AddToCart';
function App() {
  return (
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route path ='/login' component={SignIn}/>
        <Route path ='/register' component={SignUp}/>
        <Route path ='/addmusic' component={AddMusic}/> 
        <Route path = '/musicList' component={MusicList}/> 
        <Route path = '/all' component={Allmusic}/> 
        <Route path = '/cart' component={CartItem}/>     
        <Route path ='/Navbar' component={Navbar}/>
      </Switch>
    </Router>
   
  )
}

export default App
