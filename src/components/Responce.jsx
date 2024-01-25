import React from 'react'
import Lottie from 'lottie-react';
import item from '../Assets/Animation01.json'
import './Resp.css';
export default function Responce() {
  return (
    <div>


        <div className="main-resp-body">
        <h1>Your Responce</h1>
        <h3>Please give your suggestions on our services...we will always welcome your suggestions...</h3>
        <div className="main-resp">
          <div className="resp-left">
          <Lottie animationData={item} style={{height:"60vh"}} />
          </div>
          <div className="resp-right">
            <div>
              <span>Name: <input type="text" placeholder='Enter Your Name' /></span>
              <span>Email: <input type="email" placeholder='Enter Your Email' /></span>
              <span>Discription: </span>
              <input style={{width:"400px"}} className='ip-input-desc' type="text" placeholder='Write upto 300 words'/>
              <span><button className='btn btn-success'> Submit</button></span>
            </div>
          </div>
        </div>

        </div>

    </div>
    
  )
}
