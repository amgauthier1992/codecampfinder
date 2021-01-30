import React from 'react';
import './CourseDetail.css';

class CourseDetail extends React.Component {

  goToDashboard = () => {
    this.props.history.push('/dashboard');
  }

  render(){
    const course = this.props.currentCourse;

    if(course.Course == undefined){
      return <></>
    }

    let ui = {
      ScheduleType: 'Part time',
      Is_online: <i className="far fa-times-circle"></i>,
      Solo_instruction: <i className="far fa-times-circle"></i>,
      Pair_programming: <i className="far fa-times-circle"></i>,
      Prior_experience: <i className="far fa-times-circle"></i>,
      Payment : {
        Financing: <i className="far fa-times-circle"></i>,
        Isa: <i className="far fa-times-circle"></i>,
        Placement_based: <i className="far fa-times-circle"></i>,
        Repayment_guarantee: <i className="far fa-times-circle"></i>
      }
    }

    //schedule
    if (course.Schedule.type == 'full_time'){
      ui.ScheduleType = 'Full time'
    } 

    if(course.Course.is_online){
      ui.Is_online = <i className="far fa-check-circle"></i>
    } 

    if(course.Course.solo_instruction){
      ui.Solo_instruction = <i className="far fa-check-circle"></i>
    } 

    if(course.Course.pair_programming){
      ui.Pair_programming = <i className="far fa-check-circle"></i>
    } 

    if(course.Course.prior_experience){
      ui.Prior_experience = <i className="far fa-check-circle"></i>
    } 

    //payment plan
    if(course.PaymentSummary.financing){
      ui.Payment.Financing = <i className="far fa-check-circle"></i>
    } 

    if(course.PaymentSummary.isa){
      ui.Payment.Isa = <i className="far fa-check-circle"></i>
    } 

    if(course.PaymentSummary.placement_based){
      ui.Payment.Placement_based = <i className="far fa-check-circle"></i>
    } 

    if(course.PaymentSummary.repayment_guarantee){
      ui.Payment.Repayment_guarantee = <i className="far fa-check-circle"></i>
    } 

    return (
      <div className='detail-wrapper'>
        <h3 className='detail-header'>{course.Course.name}</h3>
        <table className='detail-table-top'> 
          <tbody>
            <tr>
              <td className='detail-left'>Schedule:</td>
              <td className='detail-right'>{ui.ScheduleType}</td>
            </tr>
            <tr>
              <td className='detail-left'>Hours:</td>
              <td className='detail-right'>{course.Schedule.hours}/week</td>
            </tr>
            <tr>
              <td className='detail-left'>Duration:</td>
              <td className='detail-right'>{course.Schedule.duration} weeks</td>
            </tr>
            <tr>
              <td className='detail-left'>Online</td>
              <td className='detail-center'>{ui.Is_online}</td>
            </tr>
            <tr>
              <td className='detail-left'>Solo Instruction:</td>
              <td className='detail-center'>{ui.Solo_instruction}</td>
            </tr>
            <tr>
              <td className='detail-left'>Pair Programming:</td>
              <td className='detail-center'>{ui.Pair_programming}</td>
            </tr>
            <tr>
              <td className='detail-left'>Prior Experience:</td>
              <td className='detail-center'>{ui.Prior_experience}</td>
            </tr>
          </tbody>
        </table>
        <div className='detail-languages-wrapper'>
          <h4 className='detail-languages-header'>Languages covered</h4>
          <ul className="detail-language-ul">
            {course.Languages.map((la, k) => {
              return (
                <li className="detail-language-li" key={k}>
                  {la}
                </li>
              )
            })}
          </ul>
        </div>
        <div className='detail-payment-wrapper'>
        <h4 className='detail-payment-header'>Payment Summary</h4>
          <table className='detail-table-bottom'>
            <tbody>
              <tr>
                <td className='detail-left'>Upfront Cost:</td>
                <td className='detail-right'>${course.PaymentSummary.up_front}</td>
              </tr>
              <tr>
                <td className='detail-left'>Financing available:</td>
                <td className='detail-center'>{ui.Payment.Financing}</td>
              </tr>
              <tr>
                <td className='detail-left'>Income Sharing Agreement:</td>
                <td className='detail-center'>{ui.Payment.Isa}</td>
              </tr>
              <tr>
                <td className='detail-left'>Placement-based Plan:</td>
                <td className='detail-center'>{ui.Payment.Placement_based}</td>
              </tr>
              <tr>
                <td className='detail-left'>Repayment Guarantee:</td>
                <td className='detail-center'>{ui.Payment.Repayment_guarantee}</td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className='course-detail-controls'>
            <button className="redirect-dashboard-btn" type="button" onClick={() => this.goToDashboard()}>Go Back</button>
          </div>
      </div>
    )
  }
}

export default CourseDetail;
