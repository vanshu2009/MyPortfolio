import React from 'react'
import "./skills.css"
import Menu from "./Menu"
const Skills = () => {
    const [item, setItems] = React.useState(Menu.filter((curElem) => curElem.category === "Core Technologies"));
    const filterItem = (categoryItem)=>{
      const updatedItems = Menu.filter((curElem)=>{return curElem.category===categoryItem;});
      setItems(updatedItems);
    }
    return (
      <section className='work container section' id='portfolio'>
        <h2 className='section__title'>Skills</h2>
        <div className='work__filters'>
          <span className='work__item' onClick={()=>filterItem("Core Technologies")}>Core Technologies</span>
          <span className='work__item' onClick={()=>filterItem("Development Tools")}>Development Tools</span>
          <span className='work__item' onClick={()=>filterItem("Soft Skills")}>Soft Skills</span>
        </div>
        <div className='work__container grid' >
          {item.map((elem) => {
            const { id, image, title, name} = elem;
            return (
              <div className='work__card' key={id}>
                <div className='work__thumbnail'>
                  <img src={image} alt="" className='work__img' />
                  <div className='work__mask'></div>
                </div>
                <h3 className='work__title'>{title}</h3>
                <span className='work__button'>{title}</span>
              </div>
            )
          })}
        </div>
      </section>
    )
}

export default Skills


