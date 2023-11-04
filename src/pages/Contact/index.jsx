import React from 'react'
import './contact.css'
import { BiCurrentLocation} from 'react-icons/bi';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiFillLinkedin} from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillMobile } from 'react-icons/ai';


const Contact = () => {
  return (
    <>
         {/* <div className='contact-img-box'>
              <img src='./phone.jpg' />
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
                </div> */}
          <div className='contact-container'>
              <h3 className='contact-title'>Get in touch</h3>
              {/* <div className='row'>
              <div className='column'>
                <div className='contact-img-box'>
              <img src='./phone.jpg' />
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
                  <div className='column'>
                  <form class="contact100-form validate-form">
                          <span class="contact100-form-title">

                          </span>
                          <div class="wrap-input100 validate-input" data-validate="Name is required">
                          <input class="input100" type="text" name="name" placeholder="Name"/>
                          <span class="focus-input100"></span>
                          <span class="symbol-input100">
                          <i class="fa fa-user" aria-hidden="true"></i>
                          </span>
                          </div>
                          <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                          <input class="input100" type="text" name="email" placeholder="Email"/>
                          <span class="focus-input100"></span>
                          <span class="symbol-input100">
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                          </span>
                          </div>
                          <div class="wrap-input100 validate-input" data-validate="Message is required">
                          <textarea class="input100" name="message" placeholder="Message"></textarea>
                          <span class="focus-input100"></span>
                          </div>
                          <div class="container-contact100-form-btn">
                          <button class="contact100-form-btn">
                          Send
                          </button>
                </div>
          </form>
                  </div>

              </div> */}

              <div className='row-social'>
                    <div className='column-social'>
                      <AiFillMobile />
                      <h5>call me</h5>
                      <p>9860852000</p>


          </div>

          <div className='column-social'>
                      <AiOutlineMail />
                      <h5>Email me at</h5>
                      <p>nishapoudel400@gmail.com</p>


          </div>

          <div className='column-social'>
                      <AiFillLinkedin/>
                      <h5>Get in touch at</h5>
                      <p>Linkedin</p>


          </div>

          <div className='column-social'>
                      <BiCurrentLocation/>
                      <h5>Visit Office</h5>
                      <p>Nepal</p>


                          </div>

        </div>
        <form class="form-inline" action="/action_page.php">

  {/* <label for="pwd">Name:</label>
  <input type="password" id="pwd" placeholder="Enter password" name="pswd"/> */}

   <label htmlFor="email">Email:</label>
  <input type="email" id="email" placeholder="Enter email" name="email"/>

   <label htmlFor="pwd">Subject:</label>
  <input type="password" id="pwd" placeholder=" subject" name="pswd"/>



  <button type="submit">Submit</button>
</form>
          </div>

    </>
  )
}

export default Contact
