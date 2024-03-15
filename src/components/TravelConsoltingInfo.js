import React from 'react'
import styled from 'styled-components'
import imageSouthAfrica from '../images/travel/travelsouthafrica.jpg'
function TravelConsoltingInfo() {
  return (
    <Wrapper className="section-center">
      <div className="info">
        <h2>Visa facilitation services</h2>
        <p>
          Visa facilitation services We provide assistance with visa processing
          and guiding customers through the application procedure , our service
          can help streamline the process and alleviate potential stress by
          insuring that applicants understand the requirements and steps
          involved.
        </p>
        <h2>Placement Services</h2>
        <p>
          Finding a place to stay, be it a hotel, guest house, hostel,
          apartment, caravan, mud hut or longboat is often the hardest part of
          travel. We are here to help, Research various types of accommodations
          available in your travel destination, we provide a variety of options
          to choose from, considering factors such as location, price,
          amenities, and suitability for families.
        </p>
        <h2>Transportation</h2>
        <p>
          We offer transportation assistance from the airport or train station
          to the accommodation. We aim to greatly enhance the overall experience
          of our customers helping with transportation not only saves our
          customers time , but the the hassle of figuring out transportation
          logistics in an unfamiliar place but also sets a welcoming tone right
          from the start of their journey.
        </p>
      </div>
      <img src={imageSouthAfrica} alt="south africa cape town table mountain" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }
`

export default TravelConsoltingInfo
