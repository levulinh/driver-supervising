import React, {
  Component
} from 'react';
import {
  Route
} from 'react-router-dom';
import DashBoard from './components/DashBoard';
import LoginPage from './components/LoginPage'
import AddUser from './components/AddUser';
const App = () => (
  <div>
    <Route path="/" exact component={DashBoard} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/addUser" exact component={AddUser} />
  </div>

)


export default App;