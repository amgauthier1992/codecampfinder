import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../Utils/PrivateRoute';
import HomePage from '../../routes/HomePage/HomePage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import ContactPage from '../../routes/ContactPage/ContactPage';
import UserDashboard from '../../routes/UserDashboard/UserDashboard';
import SearchPage from '../../routes/SearchPage/SearchPage';
import ResultsPage from '../../routes/ResultsPage/ResultsPage';
import CourseDetailPage from '../../routes/CourseDetailPage/CourseDetailPage';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import './App.css';

class App extends React.Component {

  render(){
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register' component={RegisterPage}/>
          <Route path='/contact' component={ContactPage}/>
          <PrivateRoute path='/dashboard' component={UserDashboard}/>
          <PrivateRoute path='/search' component={SearchPage}/>
          <PrivateRoute path='/results' component={ResultsPage}/>
          <PrivateRoute path='/user/course/:id' component={CourseDetailPage}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
