import React from 'react'
import img1 from "../assets/"

const Hero = () => {
  return (
    <>

    <div className="container-fluid Hero">
        <div className="container gx-0">
            <div className="row gx-0">
                <div className="col-md-6">
                    <div className="Hero_col1"></div>
                </div>
                <div className="col-md-6">
                    <div className="Hero_col1">
                        <img src={img1} alt="image" className='img-fluid' />
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Hero