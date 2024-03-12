import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { heroimage } from '../utils/constants'
import ImageSlider from './ImageSlider'

function Hero() {
  return <ImageSlider images={heroimage} />
}

export default Hero
