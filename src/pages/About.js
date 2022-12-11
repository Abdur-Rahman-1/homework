import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import { Aboutgroup } from '../components/aboutgroup/Aboutgroup'
import { Goal } from '../components/goal/Goal'
import { Progres } from '../components/progres/Progres'
import { Inspire } from '../components/inspire/Inspire'
import { Benefits } from '../components/benefits/Benefits'
import { Meet } from '../components/meet/Meet'
import { Footer } from '../components/footer/Footer'



export const About = () => {
  return (
    <>
    <Navbar/>
    <Aboutgroup/>
    <Goal/>
    <Progres/>
    <Inspire/>
    <Benefits/>
    <Meet/>
    <Footer/>
    </>
  )
}
