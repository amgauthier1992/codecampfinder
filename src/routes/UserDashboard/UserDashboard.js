import React from 'react';
import config from '../../config';
import Sidebar from '../../components/Sidebar/Sidebar';
import TokenService from '../../services/token-service';
import UserCourseList from '../../components/UserCourseList/UserCourseList';
import './UserDashboard.css';

class UserDashboard extends React.Component {
  
  state = {
    error: null,
    first_name: '',
    userCourses: [] 
  }

  componentDidMount = () => {
    const token = TokenService.getAuthToken()
    const payload = TokenService.getPayload()
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'session_token': token
      }
    }
    
    fetch(`${config.API_ENDPOINT}/users/validate`, options)
      .then(res => { 
        if (!res.ok){
          throw new Error(res.statusText)
        }
        return res.json()
      })
      .then(responseJson => {   
        this.setState({
          first_name: payload.first_name
        })
        return fetch(`${config.API_ENDPOINT}/user/courses`, options)
      })
      .then(res => { 
        if (!res.ok){
          throw new Error(res.statusText)
        }
        return res.json(); 
      })
      .then(userCourses => {
        this.setState({
          userCourses: userCourses
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

  viewCourseDetail = (course_id) => {
    this.props.history.push(`/user/course/${course_id}`)
  }

  removeCourse = (course_id) => {
    const newCourses = this.state.userCourses.filter((course) => course.CourseId !== course_id);
    this.setState({
      userCourses: newCourses
    })
  }

  render(){
    const { first_name } = this.state
    let listJsx = null

    if(this.state.userCourses < 1){
      listJsx = <div className='null-courses'>No courses to display</div>
    }

    return (
      <div className='dashboard-container'>
        <Sidebar history={this.props.history}/>
        <header className='dashboard-header'>
          <h1 className='dashboard-greeting'>Hello, {first_name}</h1>
        </header>
        <span className='dashboard-span'>Use the 'Find Courses' search tool to find
        available course offerings from bootcamps in your area.</span>
        <h2 className='userCourses-header'>My Courses</h2>
        {listJsx}
        <UserCourseList userCourses={this.state.userCourses} history={this.props.history} viewCourseDetail={this.viewCourseDetail} removeCourse={this.removeCourse}/>
      </div>
    )
  }
}

export default UserDashboard;