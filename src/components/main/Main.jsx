import React from 'react'
import './Main.css';

const Main = () => {
  return (
    <div className='row'>
        <div className="col left">
          <img className='level' src='./images/ay.jpeg' alt='ayo'   />
        </div>
        <div className="col right">
          <h2>Hello, my name is <span>Ayo.</span></h2>
          <h4>I am a Web Developer</h4>
        </div>
    </div>
  )
}

export default Main