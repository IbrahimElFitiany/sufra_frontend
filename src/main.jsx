import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import './Assets/Fonts/fonts.css'

import RestaurantPage from './Components/Pages/RestaurantPage'
import RestaurantRegistration from './Components/Pages/RestaurantRegistration'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/restaurant/:id" element={<RestaurantPage/>} />
        <Route path="/join-us" element={<RestaurantRegistration/>} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
