import React from 'react'
import './portfolio.css'
import demo1 from '../../assets/demo1.png'
import demo2 from '../../assets/demo2.PNG'
import demo3 from '../../assets/demo3.PNG'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Portfolio</h5>
      <h2>All my Projects</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__image'>
            <img src={demo1} alt=''></img>
          </div>
          <h3>Inventory Management</h3>
          <div className='portfolio__button'>
          <a href='http://mydouzofoodhub.onlinewebshop.net/' className='btn' target='__blank'>Github</a>
          <a href='https://github.com/marklouisALTER/Inventory-and-Salary-Management' className='btn btn-primary' target='__blank'>Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__image'>
            <img src={demo2} alt=''></img>
          </div>
          <h3>Employee Salary Management</h3>
          <div className='portfolio__button'>
          <a href='https://github.com/marklouisALTER/Java-code-learnings-and-projects/tree/main/Employee111819' className='btn' target='__blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__image'>
            <img src={demo3} alt=''></img>
          </div>
          <h3>To-Do List JS</h3>
          <div className='portfolio__button'>
          <a href='https://github.com/marklouisALTER/To-do-list-js' className='btn' target='__blank'>Github</a>
          <a href='https://marklouisalter.github.io/To-do-list-js/' className='btn btn-primary' target='__blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio