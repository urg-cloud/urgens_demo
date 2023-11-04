import React from 'react'
import  { useState, useEffect } from 'react';
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
import { FaArrowUp } from 'react-icons/fa';



import { Link, useLocation } from 'react-router-dom';

import { Main } from 'tsparticles';




import './style.css'
import Button from '../../components/button'
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import CircleCursor from '../../components/cursor';
import Footer from '../Footer';
import Skill from '../Skills';
import Cursor from '../../components/cursor';

import { loadFull } from "tsparticles";
import ParticlesComponent from '../../components/particles';
import ParticleContainer from '../../components/particles';




function Home() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const buttonStyles = {
    display: click ? 'block' : 'none',
  };


//ts particles
  const [showInfo, setShowInfo] = useState(true); // Set to true initially

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    // Show the button when the user scrolls down 100px
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>


      <div className='container'>

      <div className='main'>
          {/* <Cursor></Cursor> */}
          {showInfo && <ParticlesComponent></ParticlesComponent>}



          <aside>


            <nav className="navbar">
             {/* {
                renderParticleJsInHomePage && ( */}
                  {/* <AnimatePresence>


                    <ParticleContainer></ParticleContainer>
                    </AnimatePresence> */}


        <div className="nav-container">
        <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                      // onClick={handleClick}
                      onClick={() => scrollToSection('home')}
                    >
                       <Button
                        navIcon={<AiTwotoneHome />} info="Home"
                        styles={buttonStyles}


                      >


                      </Button>
                      <a  className={click ? "mob-menu active" : "mob-menu"}>Home</a>

              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="#about"
                activeClassName="active"
                className="nav-links"
                      // onClick={handleClick}
                      onClick={() => scrollToSection('about')}
              >
                <Button
                navIcon={< FaUserAlt />} info="About">
                      </Button>
                      <a  className={click ? "mob-menu active" : "mob-menu"}>About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/01-NISHA-CV.pdf"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Button
               navIcon= { < AiFillFileText/> } info="Resume"  >
                      </Button>
                      <a  className={click ? "mob-menu active" : "mob-menu"}  href="/01-NISHA-CV.pdf" target="_blank" download>Resume</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="#project"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 <Button
              navIcon= { <  GrServices/> } info="Service"  >
                      </Button>
                      <a  className={click ? "mob-menu active" : "mob-menu"}>Service</a>
              </Link>
                  </li>

                  <li className="nav-item">
              <Link
                exact
                to="#contact"
                activeClassName="active"
                className="nav-links"
                      // onClick={handleClick}
                      onClick={() => scrollToSection('contact')}
                    >
                       <Button
              navIcon= { < GrMail/> }  info="Contact"   >
                      </Button>
                      <a  className={click ? "mob-menu active" : "mob-menu"}>Contact</a>

              </Link>
            </li>
          </ul>

        </div>
      </nav>
        </aside>

        <div className='mid-content'>

          <div className='name'>
            <p>Nisha Poudel</p>

            <p className='typewriter'>
        Hi,{" "}
        <ReactTyped strings={[" I am a FrontEnd Developer"]} typeSpeed={100} loop />
            </p>

            <a href="/01-NISHA-CV.pdf" className='resume' target="_blank" download>
  Download Resume
</a>

            <div className='social-media'>
              <a href='https://www.facebook.com/usernishap/' target='_blank'> <BiLogoFacebook/>
              </a>
              <a href='https://www.facebook.com/usernishap/'target='_blank'> <AiFillInstagram/>
              </a>

              <a href='https://www.linkedin.com/in/nisha-poudel-27360a188/' target='_blank'> <AiFillLinkedin/>
              </a>

              <a href='https://www.github.com/nishapoudel/' target='_blank'> <AiFillGithub/>
              </a>


            </div>

         </div>

        </div>
<div class="animation-mouse">
                                <div class="mouse"  onClick={scrollToBottom}></div>
                            </div>
        </div>
      </div>


      {/* <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact> */}

      <div id="about" >
        <About />
      </div>

      <div id="skill" >
        <Skill />
      </div>

      <div id="project" >
        <Project />
      </div>

      <div id="contact" >
        <Contact />
      </div>
      <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowUp></FaArrowUp>
    </button>
      <Footer></Footer>
    </div>
  )
}

export default Home
