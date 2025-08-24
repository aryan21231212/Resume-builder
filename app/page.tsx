import React from 'react'
import Navbar from '../components/Navbar'
import HowitWorks from '@/components/HowitWorks'
import Home from '@/components/Home'

const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <HowitWorks />
    </>
  )
}

export default page