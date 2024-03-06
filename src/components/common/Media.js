import React from 'react'

import "../../assets/style/common.css"
import forbesImg from "../../assets/image/png/forbesImg.png"
import fortuneImg from "../../assets/image/png/fortuneImg.png"
import outlookImg from "../../assets/image/png/outLookImg.png"

function Media() {
  return (
    <div className='container bgMedia'>
      <div className='row bgMedia justify-content-center align-items-center'>
        <div className='col-lg-3 justify-content-center align-items-center'>
          <p className='media-text'>Media & Publication</p>
        </div>
        <div className='col-lg-3'>
          <div><img src={forbesImg} /></div>
        </div>
        <div className='col-lg-3'>
          <div><img src={fortuneImg} /></div>
        </div>
        <div className='col-lg-3'>
          <div><img src={outlookImg} /></div>
        </div>
      </div>
    </div>
  )
}

export default Media
