import React from 'react'
import './pageIntro.module.css'

const PageIntro = ({ reff }) => {
  return (
    <section ref={reff}>
        <div className="container">
            <div className="row">
                <div id='intro-section' className="col">
                    <div className="container px-md-3 px-sm-0">
                        <div className="row">
                            <div className="col-md-12 mb-4 text-center">
                                <h3 className='display-3 fw-bold pt-md-5 pt-5' styles={{ color: '#2A083F'}}>
                                    Full Stack Qendrim Kryeziu
                                </h3>
                                <hr className=" my-4 text-light" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col d-none d-lg-inline">
                    <div className="rgba-gradient d-flex justify-content-center align-items-center header">
                        <div className="container px-md-3 px-sm-0">
                            <div className="row">
                                <div className="col-md-12 mb-4 mt-3 ms-5 text-center dev-img">
                                    <img className='img-fluid mt-3 ms-5' src={"https://postcron.com/image-splitter/img/landing/convert_imagesplitter.png"} alt="home" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PageIntro