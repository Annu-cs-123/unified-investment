import React from 'react'

import "../../assets/style/common.css"

function Business() {
  return (
    <div className='container bg_business'>
      <div className="text-center py-5">
        <span className='individual-text'>
          We are Dedicated   </span> <span className='text_color'>to the Expansion</span>


        <h2 className='text_color'>  of    <span className='individual-text'>your Business</span></h2>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-auto">
          <button className='individual-btn'><span style={{ color: "#906312" }}>FOR</span> INDIVIDUAL</button>
          <button className='individual-btn'><span style={{ color: "#906312" }}>FOR</span> CORPORATE</button>
        </div>

      </div>
      <div className='text-center py-5'>
        <button className='expolre-button' style={{ background: "transparent" }}>Let's Connect</button>
      </div>
    </div>
  )
}

export default Business
