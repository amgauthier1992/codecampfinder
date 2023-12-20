import React from 'react';
import config from '../../config';
import Sidebar from '../../components/Sidebar/Sidebar';
import SearchForm from '../../components/SearchForm/SearchForm';
import TokenService from '../../services/token-service';
import './SearchPage.css';

class SearchPage extends React.Component {

  state = {
    message: '',
    error: null
  }

  componentDidMount = () => {
 
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'session_token' : TokenService.getAuthToken()
      }
    }

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/validate`, options)
      .then(res => {
        if (!res.ok){
          throw new Error(res.statusText)
        }
        return res.json();
      })
      .then(responseJson => {
        this.setState({
          message: responseJson.message
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        })
        TokenService.clearAuthToken();
        this.props.history.push('/login');
      })
  }

  render(){
    return (
      <div className='search-page-container'>
        <Sidebar history={this.props.history}/>
        <h2 className='search-header'>Find Courses</h2>
        <SearchForm history={this.props.history}/>
      </div>
    )
  }
}

export default SearchPage;