import React, { useEffect, useState } from 'react'
import educationImage from '../../../assets/images/education.png'
import { useSelector } from "react-redux";
import { api, endpoints } from '../../../lib/api'
import { getHeaderStructure } from '../../../lib/helper'
import moment from "moment";

const Education = ({ reff }) => {
    const [educations, setEducations] = useState([])
  
  const token = useSelector((state) => state.auth.data)
  
  const config = {
    headers: getHeaderStructure(token)
  }

  useEffect(() => {
    const getEducation = async () => {
        try {
            const result = await api.call(endpoints.educations, config)
            setEducations(result.data)
        } catch (err) {}
    }
    getEducation()
  }, [token])

  const education = educations.map((edu) => {
    return (
        <div key={edu._id} className="col-xl-10 col-md-11 col-10 mx-5">
            <p className="fw-bold mb-3" style={{ fontSize: "19px" }}>
                {edu.title}
            </p>
            <p className="mb-3 text-primary" style={{ fontSize: "14px" }}>
                {edu.school}, {edu.city}
            </p>
            <p className="grey-text" style={{ fontSize: "13px" }}>
                {moment(edu.startDate).format("MMM YYYY")} -{" "}
                {moment(edu.endDate).format("MMM YYYY")}
            </p>
            <hr className="mb-4" />
        </div>
    )
  }) 

  return (
        <section
          ref={reff}
          id="education"
          className='py-5'
          style={{ backgroundColor: '#fff'}}
        >
            <div className="container">
                <h2 className="h1-responsive font-weight-bold text-center mb-5">
                    Education
                </h2>

                <div className="row">
                    <div className="col-lg-5 col-md-12 text-center text-lg-left">
                        <img className="img-fluid mb-3 d-none d-lg-inline" src={educationImage} alt="education" />
                    </div>

                    <div className="col-lg-7">
                        <div className="row mb-3">{education}</div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Education