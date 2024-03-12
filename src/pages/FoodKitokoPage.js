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

function FoodKitokoPage() {
  return (
    <div>
      <ServiceHero image={foodImage} title="M Kitoko" />
      <FoodInfo />
      <FoodDescription />
      <FoodPrice />
      <FoodDescription />
      <PropertyContact />
      {/* <FoodContact /> */}
    </div>
  )
}

export default FoodKitokoPage
