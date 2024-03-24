import React, { useEffect } from 'react'
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <ServiceHero
        image={foodImage}
        title="M Kitoko"
        description="M Kitoko is a branded restaurant managed by Royal Memoria, specializing in burgers. The name 'Kitoko'  implies  something aesthetically pleasing or beautiful."
      />
      <FoodInfo />
      <FoodDescription
        title="Store Location"
        description="158b Civic Boulevard, Braamfontein, Johanessburg, South Africa"
      />
      <FoodPrice />
      <FoodDescription
        title="Doorstep Delivery"
        description="Delivering food to our customers' doorsteps is indeed a great way to make their lives easier and enhance their overall experience with our services. By offering this convenience, we are saving them time and effort while providing them with delicious meals without the hassle of cooking or going out to pick up food."
      />
      <PropertyContact departmentName="M Kitoko Food" />
      {/* <FoodContact /> */}
    </div>
  )
}

export default FoodKitokoPage
