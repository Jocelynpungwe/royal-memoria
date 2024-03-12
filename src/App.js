import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'

import {
  HomePage,
  Error,
  AboutPage,
  ContactPage,
  EntertainmentPage,
  GalleryPage,
  CosmeticPage,
  CharityPage,
  TravelConsoltingPage,
  PropertyPage,
  FoodKitokoPage,
} from './pages'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="entertainment" element={<EntertainmentPage />} />
        <Route path="travel" element={<TravelConsoltingPage />} />
        <Route path="property" element={<PropertyPage />} />
        <Route path="food" element={<FoodKitokoPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="cosmetic" element={<CosmeticPage />} />
        <Route path="charity" element={<CharityPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
