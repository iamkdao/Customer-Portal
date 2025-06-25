import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'
import EstimatePage from './pages/Estimate/EstimatePage'

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
