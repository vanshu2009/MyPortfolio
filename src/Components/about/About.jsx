import React from 'react'
import "./about.css"
import About from "../../assets/avatar-2.svg";
import AboutBox from "./Aboutbox";
const about = () => {
    return (
        <section className='about container section' id='about'>
          <h2 className='section__title'>About Me</h2>
          <div className='about__container grid'>
            <img src={About} alt='' className='about__img' />
          <div className='about__data grid'>
            <div className='about__info'>
              <p className='about__discription'>Hi, I'm Vanshika Garg – a Computer Science student, 
              Full-Stack Developer, and enthusiast in 3D modeling and AR/VR. I've also authored research papers
              in the field of AR/VR, combining innovation with academic excellence.</p>
              <a href='https://drive.google.com/file/d/1VGfy_9MDhdeFNw1LAuhw_0uKI-HljKzH/view?usp=drive_link' className='btn'>Download Resume</a>
            </div>
            <div className='about__skills grid'>
              <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>Web Devlopment</h3>
                  <span className='skills_number '>90%</span>
                </div>
                <div className='skills__bar'>
                  <span className='skills__percentage devlopment'></span>
                </div>
    
                <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>Data Structures & Algorithm</h3>
                  <span className='skills_number'>75%</span>
                </div>
                <div className='skills__bar'>
                  <span className='skills__percentage  DSA'></span>
                </div>
              </div>
              <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>Database Management System</h3>
                  <span className='skills_number'>80%</span>
                </div>
                <div className='skills__bar'>
                  <span className='skills__percentage database'></span>
                </div>
                </div>
                <div className='skills__data'>
                <div className='skills__titles'>
                  <h3 className='skills__name'>Ar/Vr</h3>
                  <span className='skills_number'>65%</span>
                </div>
                <div className='skills__bar'>
                  <span className='skills__percentage Ar'></span>
                </div>
                </div>
    
              </div>
            </div>
          </div>
        
          </div>
          <AboutBox/>
        </section>
      )
}

export default about
