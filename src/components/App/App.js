import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PublicOnlyRoute from '../Utils/PublicOnlyRoute';
import PrivateRoute from '../Utils/PrivateRoute';
import HomePage from '../../routes/HomePage/HomePage';
import RegisterPage from '../../routes/RegisterPage/RegisterPage';
import LoginPage from '../../routes/LoginPage/LoginPage';
import ContactPage from '../../routes/ContactPage/ContactPage';
import UserDashboard from '../../routes/UserDashboard/UserDashboard';
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import Loader from '../Loader/Loader'
import { withAppContext } from '../../contexts/AppContext';
import AuthContext from '../../contexts/AuthContext';
import './App.css';

class App extends React.Component {
  static contextType = AuthContext;
  
  renderAuthError = () => {
    return (
      <div className='auth-error'>
        <span role='img' aria-label='bad news icon' className='emoji'>😞</span>
        <h4>Oh no!</h4>
        <p>
          There was an error trying to fetch your user information.
        </p>
        <p>
          Try logging out and back in to see if the problem resolves itself.
        </p>
      </div>
    )
  }

  componentWillUnmount() {
    this.context.clearError();
  }

  render(){
    return (
      <div className='App'>
        <Loader />
        {this.context.error ? this.renderAuthError() : undefined}
        <Switch>
          <PublicOnlyRoute exact path='/' component={HomePage}/>
          <PublicOnlyRoute path='/login' component={LoginPage}/>
          <PublicOnlyRoute path='/register' component={RegisterPage}/>
          <PublicOnlyRoute path='/contact' component={ContactPage}/>
          <PrivateRoute path='/dashboard' component={UserDashboard}/>
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}

export default withAppContext(App);
