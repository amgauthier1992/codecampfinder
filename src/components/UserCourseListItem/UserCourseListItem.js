import React from 'react';
import config from '../../config';
import TokenService from '../../services/token-service';
import './UserCourseListItem.css';

function deleteCourseRequest(course_id, cb) {
  const token = TokenService.getAuthToken()
  const options = {
    method: 'DELETE',
    headers: {
    'content-type': 'application/json',
    'session_token': token
    }
  }

  fetch(`${config.API_ENDPOINT}/user/course/${course_id}`, options)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return res;
    })
    .then(() => {
      cb(course_id);
    })
    .catch(err => { 
      console.error(err);
    })
}

class UserCourseListItem extends React.Component {

  render(){
    const { Course, Bootcamp, CourseId, viewCourseDetail, removeCourse } = this.props
    return (
      <section className='course-list-item'>
        <h3 className='course-name'>{Course}</h3>
        <h4 className='bootcamp-name'>{Bootcamp}</h4>
        <div className='course-list-item-controls'>
          <button 
            className='course-detail-btn' 
            aria-label=''
            type='button' 
            onClick={() => { 
              viewCourseDetail(CourseId)
            }}>
            View
          </button>
          <button 
            className='course-delete-btn' 
            type='button' 
            aria-label='course-delete'
            onClick={() => { 
              deleteCourseRequest(CourseId, removeCourse) 
            }}>
            <i id='remove-course-icon' className='fas fa-trash-alt'></i>
          </button>
        </div>
      </section>
    )
  }
}

export default UserCourseListItem;