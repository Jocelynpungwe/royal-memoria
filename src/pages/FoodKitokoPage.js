import React from 'react'
import foodImage from '../images/hero/5.png'
import {
  ServiceHero,
  FoodInfo,
  FoodDescription,
  FoodPrice,
  FoodContact,
  PropertyContact,
} from '../components'

import propertyImage from '../images/chess.png'
function FoodKitokoPage() {
  return (
    <div>
      <ServiceHero
        image={foodImage}
        title="M Kitoko"
        description=" A brand and restaurant managed by Royal Memoria specializes in burgers"
      />
      <FoodInfo />
      <FoodDescription
        title="Doorstep Delivery"
        description="Delivering food to our customers' doorsteps is indeed a great way to make their lives easier and enhance their overall experience with our services. By offering this convenience, we are saving them time and effort while providing them with delicious meals without the hassle of cooking or going out to pick up food."
      />
      <FoodPrice />
      <FoodDescription
        title="Our Staff"
        description="Our Staff are there to offer every customer a crown, regardless of age or what is ordered, we aim to create a fun and engaging experience for customers, regardless of their age or what they're ordering. we believe that Consistency in providing exceptional service and memorable experiences can help build customer loyalty."
      />
      <PropertyContact departmenImage={propertyImage} />
      {/* <FoodContact /> */}
    </div>
  )
}

export default FoodKitokoPage
