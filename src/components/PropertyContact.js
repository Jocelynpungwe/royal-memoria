import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import imageTwo from '../images/africa.png'
import contactImage from '../images/contact.jpg'
import { FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

function PropertyContact({ departmentName }) {
  const initialState = {
    fullName: '',
    email: '',
    country: '',
    subject: '',
    message: '',
  }

  const [contactUs, setContactUs] = useState(initialState)
  const form = useRef()

  function changeContactUs(e) {
    const name = e.target.name
    const value = e.target.value

    setContactUs((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_g2giz7b', 'template_hbqqcrr', form.current, {
        publicKey: 'W3HcC4YK0sEPxOP1Q',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setContactUs(initialState)
        },
        (error) => {
          console.log('FAILED...', error.text)
        }
      )
  }

  return (
    <Wrapper>
      <div className="section-center">
        <div className="container">
          <div>
            <div>
              <h4>Contact Us</h4>
              {departmentName ? (
                <h5>Department of {departmentName}</h5>
              ) : (
                <h5>Department</h5>
              )}
              <p>
                Have a question or inquiry? Reach out to us at any of our branch
                locations or simply fill out our online contact form bellow, and
                we'll promptly get back to you.
              </p>
              <h5>Canada</h5>
              <div className="icons">
                <FaEnvelope />
                <p className="icons">pmemoria@royalmemoriaentertainment.com</p>
              </div>
              <h5>South Africa</h5>
              <div className="icons">
                <FaEnvelope />
                <p>timepromorsa@gmail.com</p>
              </div>
              <h5>Dr Congo</h5>
              <div className="icons">
                <FaEnvelope />
                <p>admroyalconsolting@gmail.com</p>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  id="fullName"
                  name="fullName"
                  value={contactUs.fullName}
                  onChange={changeContactUs}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={contactUs.email}
                  onChange={changeContactUs}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Country"
                  id="country"
                  name="country"
                  value={contactUs.country}
                  onChange={changeContactUs}
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  name="subject"
                  value={contactUs.subject}
                  onChange={changeContactUs}
                  required
                />
              </div>
              <textarea
                placeholder="Message"
                value={contactUs.message}
                onChange={changeContactUs}
                name="message"
                required
              ></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
          <img src={contactImage} alt="test name" className="image-two" />
        </div>
        <img src={imageTwo} alt="test name" className="image-two" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 5rem 0;
  background: var(--primary-gray);

  h4 {
    color: var(--primary-gold);
  }

  form {
    width: 100%;
    align-self: center;
    border-radius: 7px;
  }
  input {
    border-radius: 6px;
    margin-bottom: 6px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    max-height: 44px;
    font-size: 16px;
    width: 100%;
    background: white;
    box-sizing: border-box;
  }

  textarea {
    display: block;
    width: 100%;
    height: 100px;
    padding: 12px;
    border: 1px solid rgba(50, 50, 93, 0.1);
    border-radius: 6px;
    margin-bottom: 6px;
    resize: none;
    box-sizing: border-box;
  }

  label {
    color: #000;
    font-family: Manrope;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.214px;
    margin-bottom: 9px;
  }

  button {
    background: var(--primary-gold);
    font-family: Arial, sans-serif;
    color: var(--actual-white);
    border-radius: 0 0 4px 4px;
    border: 0;
    padding: 12px 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: block;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
    margin: 0 auto;
  }

  button:hover {
    filter: contrast(115%);
  }
  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  img {
    width: 100%;
    height: 100%;
    margin-top: 25px;
    object-fit: cover;
  }

  .icons {
    display: flex;
    gap: 6px;
    p {
      margin-top: -5px;
    }
  }

  @media (min-width: 800px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 25px;
      margin-bottom: 32px;
    }

    img {
      margin-top: 0;
    }
  }
`

export default PropertyContact
