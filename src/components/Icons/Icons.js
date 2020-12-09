import React from "react"
import htmlImg from '../../img/html.png'
import cssImg from '../../img/css.png'
import jsImg from '../../img/js.png'
import pyImg from '../../img/py.png'
import cSharpImg from '../../img/csharp.jpg'
import rubyImg from '../../img/ruby.png'
import javaImg from '../../img/java.png'
import swiftImg from '../../img/swift.jpg'

export default function Icons(){
  return (
    <div className="tech-icons">
      <img className="tech-img" src={htmlImg} alt="html-icon"/>
      <img className="tech-img" src={cssImg} alt="css-icon"/>
      <img className="tech-img" src={jsImg} alt="javascript-icon"/>
      <img className="tech-img" src={pyImg} alt="python-icon"/>
      <img className="tech-img" src={cSharpImg} alt="csharp-icon"/>
      <img className="tech-img" src={rubyImg} alt="ruby-icon"/>
      <img className="tech-img" src={javaImg} alt="java-icon"/>
      <img className="tech-img" src={swiftImg} alt="swift-icon"/>
    </div>
  )  
}