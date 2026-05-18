import React from 'react'
import cvFile from "../../assets/mycv.pdf";

const CTA = () => {
  return (
    <div className='cta'>
        {/* <a href={cvFile} download className='btn'>Access Resume</a> */}
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>  
  )
}

export default CTA