import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div>
      <div className="about-container"> 
         <div className="about-heading"  style={{gridArea: "aboutbox1"}}>
          <h1>ABOUT ME</h1>
         </div>
         <div className="about-description" style={{gridArea: "aboutbox2"}} >
          <h2> 
            ~ I am always eager to learn new technology.
            <br />
            ~ I am currently working on Backend and Machine Learning.
            <br />
            ~ I am optimizing problems in O(N) time.
            <br />
            ~ Learning, building & leveling up always.
            <br />
            ~ Open to work - reach me at any time. 
          </h2>
         </div>
      </div>
    </div>
  )
}

export default About
