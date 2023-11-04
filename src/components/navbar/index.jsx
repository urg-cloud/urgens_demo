
import React from 'react'
import  { useState } from 'react';
import ReactTyped from "react-typed";
import { AiTwotoneHome} from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { GrServices } from 'react-icons/gr';
import { AiFillFileText } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillLinkedin} from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';


import { Link, useLocation } from 'react-router-dom';
import ParticleContainer from '../particles'
import Button from '../../components/button'

const Navbar = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const buttonStyles = {
    display: click ? 'block' : 'none',
  };


  const location = useLocation();
  console.log(location);


 const renderParticleJsInHomePage = location.pathname ==='/'
  return (
      <div>

          <aside>


            {/* <nav
           >

            <Button
                navIcon={<AiTwotoneHome />} info="Home"

              >



            </Button>

            <Button
                navIcon={< FaUserAlt />} info="About"

              >

            </Button>



            <Button
              navIcon= { < AiFillFileText/> } info="Resume"  >
            </Button>


            <Button
              navIcon= { <  GrServices/> } info="Service"  >
            </Button>

            <Button
              navIcon= { < GrMail/> }  info="Contact"   >
            </Button>
          </nav> */}
            <nav className="navbar">
            {
    renderParticleJsInHomePage && (
<ParticleContainer></ParticleContainer>

    )
                  }

        <div className="nav-container">


          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                    >
                       <Button
                        navIcon={<AiTwotoneHome />} info="Home"
                        styles={buttonStyles}
                        text="Home"

                      >

            </Button>

              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Button
                navIcon={< FaUserAlt />} info="About">
                 </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Button
               navIcon= { < AiFillFileText/> } info="Resume"  >
               </Button>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 <Button
              navIcon= { <  GrServices/> } info="Service"  >
            </Button>
              </Link>
                  </li>

                  <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
                    >
                       <Button
              navIcon= { < GrMail/> }  info="Contact"   >
            </Button>

              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
        </aside>

    </div>
  )
}

export default Navbar