import React from 'react';
import UserCourseListItem from '../UserCourseListItem/UserCourseListItem';

class UserCourseList extends React.Component {

  render(){
    return (
      <div className='course-list-box'>
        {this.props.userCourses.map((c, i) => (
          <UserCourseListItem
            key={i}
            history={this.props.history}
            Course={c.Course}
            Bootcamp={c.Bootcamp}
            CourseId={c.CourseId}
            viewCourseDetail={this.props.viewCourseDetail}
            removeCourse={this.props.removeCourse}
          />
        ))}
      </div>
    )
  }
}

export default UserCourseList;