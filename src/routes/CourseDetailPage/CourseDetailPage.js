import React from 'react';
import config from '../../config';
import TokenService from '../../services/token-service';
import CourseDetail from '../../components/CourseDetail/CourseDetail';
import Sidebar from '../../components/Sidebar/Sidebar';
import './CourseDetailPage.css';
import '../../components/ResultsList/ResultsList.css'; //same content
import '../../components/ResultItem/ResultItem.css'; //same content

class CourseDetailPage extends React.Component {
  state = {
    currentCourse: {},
    error: null
  }

  componentDidMount = () => {
    const token = TokenService.getAuthToken()
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'session_token': token
      }
    }
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/user/course/${this.props.match.params.id}`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      return res.json()
      })
      .then(courseDetails => {
        this.setState({
          currentCourse: courseDetails
        })
      })
      .catch(err => { 
        this.setState({
          error: err.message
        })
      })
  }

  render(){
    return (
    <div className='course-detail-container'>
      <Sidebar history={this.props.history}/>
      <CourseDetail history={this.props.history} currentCourse={this.state.currentCourse}/>
    </div>
    )
  }
}

export default CourseDetailPage;

