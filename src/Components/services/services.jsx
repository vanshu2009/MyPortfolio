import React from 'react'
import "./services.css"
import image1 from "../../assets/service-1.svg"
import image2 from "../../assets/service-2.svg"
import image3 from "../../assets/service-3.svg"
const data = [
  {
    id: 1,
    image: image1,
    title: "Real-Time Pizza",
    description:
      "Real-time pizza site with cart, live tracking, and notifications using Node.js, MongoDB, and Socket.io"},
  
  {
    id: 2,
    image: image3,
    title: "Racer-Game",
    description:
      "Created a 3D Unity racing game with dynamic tracks and responsive controls using C# on Unity",
  },
  // {
  //   id: 3,
  //   image: image3,
  //   title: "Racer-Game",
  //   description:
  //     "Racing game in Unity with dynamic tracks, car physics, and random track generation",
  // },
];

const services = () => {
  return <section className='services container section' id='services'>
    <h2 className='section__title'>Projects</h2>
    <div className='services__container grid'>
      {data.map(({id,image,title,description})=>{
        return(
          <div className='services__card' key={id}>
            <img src={image} alt='' className='service__img'/>
            <h3 className='services__title'>{title}</h3>
            <p className='services__description'>{description}</p>
            <a href='https://github.com/vanshu2009' className='btn service__btn'>Visit</a>
          </div>
        )
      })}
    </div>
  </section>
}

export default services
