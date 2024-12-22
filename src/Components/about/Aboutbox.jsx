import React from 'react'

const Aboutbox = () => {
  return (
    <div className='about__boxes grid'>
        <div className='about__box'>
            <i className='about__icon icon-fire'></i>
            <div>
                <h3 className='about__title'>100+</h3>
                <span className='about__subtitle'>Leetcode questions solved</span>
            </div>
        </div>
        <div className='about__box'>
            <i className='about__icon icon-badge'></i>
            <div>
                <h3 className='about__title'>70+ Hours</h3>
                <span className='about__subtitle'>Web Devlopment and Coding</span>
            </div>
        </div>
        <div className='about__box'>
            <i className='about__icon icon-note'></i>
            <div>
                <h3 className='about__title'>3+ language</h3>
                <span className='about__subtitle'>On a journey to perfect them</span>
            </div>
        </div>
        <div className='about__box'>
            <i className='about__icon icon-chart'></i>
            <div>
                <h3 className='about__title'>5+ Projects</h3>
                <span className='about__subtitle'>Make games and projects on Unity</span>
            </div>
        </div>
    </div>
  )
}

export default Aboutbox
