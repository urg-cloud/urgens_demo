import React from 'react'
import { useState } from 'react';


// import './prj.css'
const Prj = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div className='project'>
        <div class="column " >

         <a href={props.url} target="_blank"
          onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}

          >

        {/* <img src={props.image} className='project_img'></img> */}
        {/* <div className='project-info'> */}
        {/* <h5>{props.title}</h5> */}


            {isHovered ?
              (

                  <div className='project-info'>
                   <h5>{props.title}</h5>
                    <p>{props.describe} <span className='prj-link'>    Have a look at project</span></p>

                  </div>
              ) : (
                <div>
                  <img src={props.image} className='project_img' alt={props.title} />

                  <h5>{props.title}</h5>
                  </div>

        )}



      </a>
        </div>
        </div>
    </>
  )
}

export default Prj
