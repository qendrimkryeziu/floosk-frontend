import React from 'react'

const ProjectCard = ({ data }) => {
  return (
    <div key={data._id} style={{ width: "100%"}}
         className="col-lg-4 col-12 mb-lg-0 mb-4 mt-lg-5 py-3 shadow-lg bg-white rounded">
            <div className='view overlay rounded z-depth-1'>
                <img src={data.projectImage} alt={data.title} style={{width: "100%"}} />
            </div>
            <div className="card-body pb-0">
                <h4 className="font-weight-bold">{data.title}</h4>
                <p className="grey-text">{data.description}</p>
                <p className="fw-bold"
                   style={{
                    fontSize: "14px",
                    color: "#55107E",
                    display: "inline",
                   }} 
                >
                    Technologies:
                </p>
                <p style={{ fontSize: '12px'}}>{data.technologies}</p>
                {data.haveLink && (
                    <button 
                        className='btn btn-primary btn-sm shadow-none mb-0'
                        target="_blank"
                        href={data.link}
                        >
                        <i className="fa fa-clone left"></i> View project code
                    </button>
                )}
            </div>
         </div>
  )
}

export default ProjectCard