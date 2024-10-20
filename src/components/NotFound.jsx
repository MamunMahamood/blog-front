import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <div className='flex-grow'>
    <div class="text-center">
    <h1 class="text-6xl font-bold text-blue-500">404</h1>
    <p class="text-xl text-gray-700 mt-4">Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" class="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-lg">Go Home</Link>
  </div>
    </div>
    </>
  )
}

export default NotFound