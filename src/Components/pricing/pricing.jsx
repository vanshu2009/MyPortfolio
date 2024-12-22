import React from 'react'
import "./pricing.css"
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-3.svg";
import Image3 from "../../assets/startLeadership.png";
const pricing = () => {
  return (
    <section className='pricing container section' id='blog'>
      <h2 className='section__title'>Certifications</h2>
      <div className='pricing__container grid'>
        <div className='pricing__item'>
          <img src={Image1} alt='' className='pricing__img' />
          <h3 className='pricing__plan'>Strategising: Management for Global Competitive Advantage</h3>
          <p className='pricing__title'>September 2023</p>
          <p className='pricing__support'>This specialization sharpened my skills in strategy, and CSR to drive business growth.</p>
          <a href='https://drive.google.com/file/d/1u6pLY39RlLvFogx7kOsfmqRjON8Z2HiF/view?usp=drive_link' className='btn'>View Certificate</a>
        </div>
        <div className='pricing__item'>
          <img src={Image2} alt='' className='pricing__img' />
          <h3 className='pricing__plan'>How Virtual Reailty is Revolutionizing Astronaut Training</h3>
          <p className='pricing__title'>September 2023</p>
          <p className='pricing__support'>Authored a research paper on using virtual reality to enhance astronaut training and mission preparedness.</p>
          <a href='https://drive.google.com/file/d/1nomFs3lNb-8NTPFsWtGJcXbOnFOxjlTs/view?usp=drive_link' className='btn'>View Certificate</a>
        </div>
        <div className='pricing__item'>
          <img src={Image3} alt='' className='pricing__img' />
          <h3 className='pricing__plan'>Leading People and Teams</h3>
          <p className='pricing__title'>September 2023</p>
          <p className='pricing__support'>Developed skills in inspiring individuals, managing talent, and leading teams effectively through insights from industry and academic leaders.</p>
          <a href='https://drive.google.com/file/d/1ybl-CB2E8SwbojyhjvOlPRfSJcx2yL1l/view?usp=drive_link' className='btn'>View Certificate</a>
        </div>
      </div>
    </section>
  )
}

export default pricing
