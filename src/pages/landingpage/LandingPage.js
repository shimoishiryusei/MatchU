import React from 'react'
import './LandingPage.css'

export default function LandingPage() {
  return (
    <div className='land-container'>
        <button type="button" className="btn btn-primary">Primary</button>
        <div className='eye_catch'>
          <h1>Header with eye catch</h1>  
        </div>
        <div className='summary'>
          <h1>概要</h1>
        </div>
        <div className='explanation'>
          <h1>説明</h1>  
        </div>

    </div>
  )
}
