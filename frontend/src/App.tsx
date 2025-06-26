import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'
import EstimatePage from './pages/Estimate/EstimatePage'
import ServicesPage from './pages/Services/ServicesPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        }
        />
        <Route path="/estimates" element={
          <ProtectedRoute>
            <EstimatePage />
          </ProtectedRoute>
        }
        />
        <Route path="/services" element={
          <ProtectedRoute>
            <ServicesPage />
          </ProtectedRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
