import React from "react"
import { Link } from 'react-router-dom'
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import ImageSlider from "../components/ImageSlider"
import Icons from "../components/Icons"

export default function HomePage(){
  return <>
    <div className="top-banner">
      <Logo />
      <header className="App-header">
        <h1>CodeCampFinder</h1>
      </header>
      <Nav />
    </div>
    <div className="slider-container">
      <ImageSlider 
        images={[
          'https://ubiqum.com/assets/uploads/2019/03/untitled-design-1-1-1.png',
          'https://ubiqum.com/assets/uploads/2019/07/coding-bootcamp-amsterdam.jpg',
          'https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Mack/bootcamp.jpg',
          'https://www.digitalcrafts.com/sites/default/files/Houston%20Programming%20Bootcamp%20Launches%20Second%20Class.jpg'
        ]}
      />
    </div>
    <h2>Find a coding bootcamp that's right for you.</h2>
      <Icons />
      <Link to="/register">
        <button className="start-btn">Get Started</button>
      </Link>
    <hr></hr>
    {/* <h3 id="admin">Are you a bootcamp administrator? Register to help keep us updated with information about your institution.</h3>
      <Link to="/register"> 
        <button className="register-btn">Register</button>
      </Link> */}
    {/* <hr></hr> */}
    <footer>© Andy Gauthier 2020</footer>
  </>
}