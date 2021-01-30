import React from 'react';
import htmlImg from '../../img/html.png';
import cssImg from '../../img/css.png';
import jsImg from '../../img/js.png';
import pyImg from '../../img/py.png';
import cSharpImg from '../../img/csharp.png';
import rubyImg from '../../img/ruby.png';
import javaImg from '../../img/java.png';
import swiftImg from '../../img/swift.png';
import './Icons.css';

export default function Icons(){
  return (
    <div className='tech-icons row'>
      <div className='column'>
        <img className='tech-img html' src={htmlImg} alt='html-icon'/>
        <img className='tech-img cSharp' src={cSharpImg} alt='csharp-icon'/>
      </div>
      <div className='column'>
        <img className='tech-img css' src={cssImg} alt='css-icon'/>
        <img className='tech-img ruby' src={rubyImg} alt='ruby-icon'/>
      </div>
      <div className='column'>
        <img className='tech-img js' src={jsImg} alt='javascript-icon'/>
        <img className='tech-img java' src={javaImg} alt='java-icon'/>
      </div>
      <div className='column'>
        <img className='tech-img py' src={pyImg} alt='python-icon'/>
        <img className='tech-img swift' src={swiftImg} alt='swift-icon'/>
      </div>
    </div>
  )  
}