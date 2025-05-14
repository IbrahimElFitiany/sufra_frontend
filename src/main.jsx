import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import './Assets/Fonts/fonts.css'

import RestaurantPage from '@pages/RestaurantPage'
import RestaurantRegistration from '@pages/RestaurantRegistrationPage'
import SearchResultsPage from '@pages/SearchResultsPage'
import HomePage from '@pages/HomePage'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/restaurant/:id" element={<RestaurantPage/>} />
        <Route path="/join-us" element={<RestaurantRegistration/>} />
        <Route path="/" element={<HomePage/>} />
        <Route path="/search" element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
