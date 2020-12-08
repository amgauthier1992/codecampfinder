import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import '../App.css';
// import config from "../config";
import Context from "../contexts/Context"
// import UsersContext from "../contexts/users-context";
// import BootcampsContext from "../contexts/bootcamps-context";
import HomePage from "../routes/HomePage";
import RegisterPage from "../routes/RegisterPage"
import ContactPage from "../routes/ContactPage"
import LoginPage from "../routes/LoginPage";
import NotFoundPage from "../routes/NotFoundPage";

class App extends React.Component {
  state = {
    users: [],
    bootcamps: [],
    error: null
  }

  addUser = (user) => {
    const newUsers = [...this.state.users];
    newUsers.push(user);
    this.setState({
      users: newUsers,
    });
  }

  componentDidMount() {

  }

  render(){
    const contextValue = {
      users: this.state.users,
      bootcamps: this.state.bootcamps,
      addUser: this.addUser,
      // addBootcamp: this.addBootcamp
    };

    return (
      <div className="App">
        <Context.Provider value={contextValue}>
          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/register" component={RegisterPage}></Route>
            <Route path="/auth/login" component={LoginPage}></Route>
            <Route path="/contact" component={ContactPage}></Route>
            {/* <Route path="/dashboard/:userId" component={UserDashboard}></Route> */}
            <Route component={NotFoundPage} />
          </Switch>
        </Context.Provider>
      </div>
    )
  }
}

export default withRouter(App);
