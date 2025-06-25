import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'
import Checkout5 from './pages/Estimate/EstimatePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <HomePage />
            <Checkout5 />
          </ProtectedRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
