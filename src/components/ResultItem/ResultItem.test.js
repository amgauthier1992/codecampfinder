import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ResultItem from './ResultItem';

describe('ResultItem Component', () => {
  let bootcamp = [
    {
      Name: 'Actualize',
      Website: 'http://anyonecanlearntocode.com/',
      Locations: [
        {
          city: 'Chicago',
          state: 'IL'
        }
      ],
      Courses: [
        {
          Name: 'Full-stack Web Development',
          Is_online: true,
          Solo_instruction: true,
          Pair_programming: true,
          Prior_experience: false,
          Schedule: {
            Type: 'full_time',
            Hours: 40,
            Duration: 17
          },
          PaymentSummary: {
            Up_front: 13900,
            Financing: true,
            Isa: false,
            Placement_based: false,
            Repayment_guarantee: false
          },
          Languages: [
            'CSS',
            'Javascript',
            'Ruby',
            'SQL'
          ]
        }
      ]
    }
  ]

  let courses = bootcamp[0].Courses;

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

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <ResultItem 
          Bootcamp={bootcamp.Name}
          Website={bootcamp.Website}
          Locations={bootcamp[0].Locations.map((l, i) => {
            return (
              <div
                className='item-location' 
                key={i}
              >
                {l.city}, {l.state}
              </div>
            )
          })}
          Courses={courses.map((c, j) => {
            let ui = {
              ScheduleType: 'Part time',
              Is_online: <i className='far fa-times-circle'></i>,
              Solo_instruction: <i className='far fa-times-circle'></i>,
              Pair_programming: <i className='far fa-times-circle'></i>,
              Prior_experience: <i className='far fa-times-circle'></i>,
              Payment : {
                Financing: <i className='far fa-times-circle'></i>,
                Isa: <i className='far fa-times-circle'></i>,
                Placement_based: <i className='far fa-times-circle'></i>,
                Repayment_guarantee: <i className='far fa-times-circle'></i>
              }
            }

            //schedule
            if (c.Schedule.Type == 'full_time'){
              ui.ScheduleType = 'Full time'
            } 

            if(c.Is_online){
              ui.Is_online = <i className='far fa-check-circle'></i>
            } 

            if(c.Solo_instruction){
              ui.Solo_instruction = <i className='far fa-check-circle'></i>
            } 

            if(c.Pair_programming){
              ui.Pair_programming = <i className='far fa-check-circle'></i>
            } 

            if(c.Prior_experience){
              ui.Prior_experience = <i className='far fa-check-circle'></i>
            } 

            //payment plan
            if(c.PaymentSummary.Financing){
              ui.Payment.Financing = <i className='far fa-check-circle'></i>
            } 

            if(c.PaymentSummary.Isa){
              ui.Payment.Isa = <i className='far fa-check-circle'></i>
            } 

            if(c.PaymentSummary.Placement_based){
              ui.Payment.Placement_based = <i className='far fa-check-circle'></i>
            } 

            if(c.PaymentSummary.Repayment_guarantee){
              ui.Payment.Repayment_guarantee = <i className='far fa-check-circle'></i>
            } 
         
            return (
              <div className='course-wrapper' key={j}>
                <div className='header-wrapper'>
                  <h4 className='course-header'>{j+1}. {c.Name}</h4>
                </div>
                <table className='table-top'> 
                  <tbody>
                    <tr>
                      <td className='left'>Schedule:</td>
                      <td className='right'>{ui.ScheduleType}</td>
                    </tr>
                    <tr>
                      <td className='left'>Hours:</td>
                      <td className='right'>{c.Schedule.Hours}/week</td>
                    </tr>
                    <tr>
                      <td className='left'>Duration:</td>
                      <td className='right'>{c.Schedule.Duration} weeks</td>
                    </tr>
                    <tr>
                      <td className='left'>Online</td>
                      <td className='center'>{ui.Is_online}</td>
                    </tr>
                    <tr>
                      <td className='left'>Solo Instruction:</td>
                      <td className='center'>{ui.Solo_instruction}</td>
                    </tr>
                    <tr>
                      <td className='left'>Pair Programming:</td>
                      <td className='center'>{ui.Pair_programming}</td>
                    </tr>
                    <tr>
                      <td className='left'>Prior Experience</td>
                      <td className='center'>{ui.Prior_experience}</td>
                    </tr>
                  </tbody>
                </table>
                <div className='languages-container'>
                  <h5 className='languages-header'>Languages covered</h5>
                  <ul className='language-ul'>
                    {c.Languages.map((la, k) => {
                      return (
                        <li className='language-li' key={k}>
                          {la}
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <div className='payment-wrapper'>
                <h5 className='payment-header'>Payment Summary</h5>
                  <table className='table-bottom'>
                    <tbody>
                      <tr>
                        <td className='left'>Upfront Cost:</td>
                        <td className='right'>${c.PaymentSummary.Up_front}</td>
                      </tr>
                      <tr>
                        <td className='left'>Financing available:</td>
                        <td className='center'>{ui.Payment.Financing}</td>
                      </tr>
                      <tr>
                        <td className='left'>Income Sharing Agreement:</td>
                        <td className='center'>{ui.Payment.Isa}</td>
                      </tr>
                      <tr>
                        <td className='left'>Placement-based Plan:</td>
                        <td className='center'>{ui.Payment.Placement_based}</td>
                      </tr>
                      <tr>
                        <td className='left'>Repayment Guarantee:</td>
                        <td className='center'>{ui.Payment.Repayment_guarantee}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <button className='course-add-btn' type='button' onClick={() => this.addCourse(bootcamp.Name, c)}>Add to MyCourses</button>
              </div>
            )
          })}
        />
      </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

