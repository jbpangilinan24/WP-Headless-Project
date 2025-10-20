import React from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {
  const navigation = useNavigate();

  const goToHomepage = () => navigation("/");

  return (
    <div className="text-center py-12 bg-red-50 rounded-lg shadow-md border border-red-200">
      <h1 className="text-6xl font-extrabold text-red-700 mb-4">404</h1>
      <p className="text-2xl text-gray-800 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Button label="Go to Homepage" onClick={goToHomepage} addClassses="mt-6" />
    </div>
  )
}
