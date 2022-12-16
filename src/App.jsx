import React from 'react'

import './App.scss'

function App() {

  return (
    <div className="App">
      <div className="card">
         <div className='card_hero'>
            <img src="/images/illustration-hero.svg"alt="hero image" className="hero_img"/>
         </div>
         <div className="card_body">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!
        </p>
        <div className="card_change">
          <img src="/images/icon-music.svg"className='col_one'/>
          <div className='col_two '>
            <h2> Annual Plan </h2>
            <span>$59.99/year</span>
          </div>
           <a href='#' className='col_three'>change </a>
        </div>
        <div>
          <button className='btn_active'> Proceed to Payment </button>
          <button className='btn_two'> Cancel Order</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
