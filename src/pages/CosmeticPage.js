import React from 'react'
import styled from 'styled-components'
import {
  CosmetciWhyUs,
  CosmetecDiscription,
  CosmeticSpecial,
  FeaturedProduct,
  PropertyContact,
  ServiceHero,
} from '../components'
import cosmeticImage from '../images/cosmetic/cosmetic4.jpg'
import { cosmeticData } from '../utils/constants'
import propertyImage from '../images/chess.png'
function CosmeticPage() {
  return (
    <Wrapper>
      <ServiceHero
        image={cosmeticImage}
        title="Royal Memoria Cosmetics"
        description=" Royal Memoria Cosmetics sets the standard for luxury beauty experiences. Trust us to elevate your beauty routine and indulge in the epitome of sophistication."
      />
      <FeaturedProduct array={cosmeticData} className="cosmtic-group" />
      <CosmeticSpecial />
      <CosmetecDiscription />
      <CosmetciWhyUs />
      <PropertyContact departmentName="Cosmetics" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .grid-contanier {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .cosmtic-group {
    grid-column: 0 1;
  }
`
export default CosmeticPage
