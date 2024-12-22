import React from 'react'
import "./contact.css"
const contact = () => {
  return (
    <section className='contact container section' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>
      <div className='contact__container grid'>
        <div className='contact__info'>
          <h3 className='contact__title'>On a mission to debug life—let's connect over tech, code, or a cup of coffee!</h3>
          <p className='contact__details'>Don't like forms?</p>
          <a href='mailto:vanshikagarg819@gmail.com' className='btn email'>Email me</a>
        </div>
        <form action='' className='contact__form'>
          <div className='contact__form-group'>
            <div className='contact__form-div'>
              <input className='contact__form-input' type='text' placeholder='Insert your name'/>
            </div>
            <div className='contact__form-div'>
              <input className='contact__form-input' type='email' placeholder='Insert your email'/>
            </div>
            
            </div>
          <div className='contact__form-div'>
              <input className='contact__form-input' type='text' placeholder='Insert your subject'/>
            </div>
            <div className='contact__form-div contact__form-area'>
              <textarea name='' id='' cols="30" rows="10" className='contact__form-input ' placeholder='Write your message'></textarea>
            </div>
            <a href='#home' className='btn message'>Send Message</a>
            
        </form>
      </div>
    </section>
  )
}

export default contact
