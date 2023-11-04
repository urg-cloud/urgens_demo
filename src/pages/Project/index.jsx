import React, { useState } from 'react'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import './project.css'

import Prj from '../../components/projectComponent';

const Project = () => {

  const [isShow, SetIsShowed] = useState(false)

  const handleMouseEnter = () => {
    SetIsShowed(true);
  };

  const handleMouseLeave = () => {
    SetIsShowed(false);
  };

  return (
    <>

          <div className='project-container project'>
              <div>
              <h2 className='project-title'>Projects</h2>
        </div>
          <div class="row">
          {/* <div class="column " >

            <a href="/https://lawcaters.com/" target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>

              <img src='./lawcater.png' className='project_img'></img>
              <div className='project-info'>
              <h5>Lawcater</h5>
              <p>This project is developed using HTML, CSS, JS and django framework.</p>

              {isShow ?
              <a href="/https://lawcaters.com/"  target="_blank">
                    Show project
                   <icon className= "arrow-icon"><HiOutlineArrowNarrowRight/></icon>
                  </a>
                  :<p>Web Development</p>
                }

            </div>
            </a>
          </div> */}

          <Prj
            url="https://lawcaters.com/"
            image="./lawcater.png"
            title="Lawcater"
            describe= "Lawcater is a webapp, used to write blogs by lawyers.This project is developed using HTML, CSS, JS and django framework."

          >

          </Prj>
          <Prj
            url="https://tendelhardware.com/"
            image="./tendel.png"
            title="Tendel Hardware"
            describe= "Tendel Hardware is a web application which display hardware items for construction.This project is developed using HTML, CSS, JS and django framework."

          >

          </Prj>


          <Prj
            url="https://tendelhardware.com/"
            image="./erp.png"
            title="Enterprise Resource Planning"
            describe= "This project is developed using ReactJS."

          >

          </Prj>
          <Prj
            url="https://github.com/nishapoudel/Beautyhub"
            image="./beautyhub.png"
            title="Beautyhub"
            describe= "This project is developed using HTMl, CSS, JS."

          >

          </Prj>
          <Prj
            url="https://tendelhardware.com/"
            image="./cms.png"
            title="Client Management System"
            describe= "This project is developed using ReactJS."

          >

          </Prj>

          <Prj
            url="https://github.com/nishapoudel/Realstate"
            image="./realstate.png"
            title="RealEstate"
            describe= "This project is developed using HTML, CSS and Django framework."

          >

          </Prj>
          <Prj
            url="https://github.com/nishapoudel/calculator/"
            image="./calculator.png"
            title="Calculator"
            describe= "This project is developed using ReactJS."

          >

         </Prj>

        </div>


          </div>

    </>
  )
}

export default Project