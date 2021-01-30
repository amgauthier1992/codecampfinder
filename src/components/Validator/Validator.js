import React from 'react';
import './Validator.css';
  
class Validator extends React.Component {
  constructor(props){
    super(props);

    if (this.props.hideValidator == null){
      throw new Error(`hideValidator method required`);
    }

    this.timer = null;
    this.interval = this.props.interval || 3000;
    this.message = this.props.message;
  }

  componentDidMount = () => {
    this.timer = setTimeout(() => {
      this.message = undefined;
      this.props.hideValidator();
    }, this.interval);

  }

  componentWillUnmount = () => {
    clearTimeout(this.timer);
  } 

  render(){
    const noMessage = <></>;

    if(this.message){
      return (
        <div className={`form-validation-message ${this.props.cssClass}`}>
          {this.message}
        </div>
      )
    }
    else {
      return noMessage;
    }
  }
}

export default Validator;
