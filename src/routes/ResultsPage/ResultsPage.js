import React from 'react';
import config from '../../config';
import Sidebar from '../../components/Sidebar/Sidebar';
import TokenService from '../../services/token-service';
import ResultsList from '../../components/ResultsList/ResultsList';
import './ResultsPage.css';

class ResultsPage extends React.Component {

  state = {
    error: null,
    bootcamps: []
  }

  checkSearchResults = () => {
    let searchResults = sessionStorage.getItem('searchResults')
    
    if(searchResults === null || JSON.parse(searchResults).length === 0){
      //if no results push to NotFound
      this.props.history.push('/redirect')
      return;
    }

    //convert results from JSON to object using JSON.parse() & store in state
    this.setState({ bootcamps: JSON.parse(searchResults) })
  }

  componentDidMount = () => {

    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'session_token' : TokenService.getAuthToken()
      }
    }

    fetch(`${config.API_ENDPOINT}/users/validate`, options)
      .then(res => {
        if (!res.ok){
          throw new Error(res.statusText)
        }
        return res.json();
      })
      .then(() => {
        this.checkSearchResults();
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
      <div className='results-page-container'>
        <Sidebar history={this.props.history}/>
        <ResultsList bootcamps={this.state.bootcamps} history={this.props.history}/>
      </div>
    )
  }
}

export default ResultsPage;

// addCourse={this.addCourse}