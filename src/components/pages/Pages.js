import React from 'react'
import '../pages/pages.css'
import Headbar from '../home/Headbar'
import Sidebars from '../home/Sidebars'
import Secsidebar from '../home/Secsidebar'
import Secone from '../cards/Secone'
import Sectwo from '../seccards/Sectwo'

export default function Pages() {
  return (
    <>
    <Headbar/>
    <div className='sidename'>
      <div className='sideone'><Sidebars/></div>
      <div className='sidetwo'><Secsidebar/></div>
    </div>
    <Secone/>
    <br></br>
    <Sectwo/>
   
    </>
  )
}
