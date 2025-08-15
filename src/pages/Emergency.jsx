import React from 'react'
import '../assets/Css/Emergency.css'
import HERO from '../components/Emergency/hero'
import Response from '../components/Emergency/Response'
import Common from '../components/Emergency/Common'
import Quick from '../components/Emergency/Quick'
import CPR from '../components/Emergency/CPR'
const Emergency = () => {
    
  return (
    <>
      <HERO/>
      <Response/>
      <Common/>
      <Quick/>
      <CPR/>
    </>
  )
}

export default Emergency
