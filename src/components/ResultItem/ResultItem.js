import React from 'react';
import './ResultItem.css';

export default function ResultItem(props){

  let courses = props.Courses;

  if (courses.length > 1){
    let newCourses = [];
    for(let i = 0; i < courses.length; i++){
      
      if(i > 0){
        newCourses.push(<hr key={`${courses[i].key}-hr`}/>)
      }

      newCourses.push(courses[i])
    }
    courses = newCourses;
  }

  return (
    <section className='result-item'>
      <div className='item-header-wrap'>
        <h2 className='item-header'>{props.Bootcamp}</h2>
        <a className='item-website' href={props.Website} target='_blank' rel='noreferrer'>Website</a>
      </div>
      <div className='item-locations'>
        {props.Locations}
      </div>
      <h3 className='offerings-header'>Course Offerings</h3>
      <div className='courses-wrapper'>
        {courses}
      </div>
    </section>
  )
}
