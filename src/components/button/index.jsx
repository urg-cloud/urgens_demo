import React from 'react'
import  { useState } from 'react';

const Button = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
      < >
           <div className="nav-btn">
              <div className="nav-btn-icon ">


          <button  onMouseEnter={handleMouseEnter}
                   onMouseLeave={handleMouseLeave}
          >
                           {props.navIcon}
          </button>



          <div style={props.styles}>{props.text}</div>

        </div>
        {isHovered && <div className="info-box">{props.info}</div>}


           </div>




    </>
  )
}

export default Button