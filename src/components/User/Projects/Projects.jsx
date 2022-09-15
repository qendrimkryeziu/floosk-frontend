import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { api, endpoints } from "../../../lib/api"
import { getHeaderStructure } from '../../../lib/helper'
import ListProject from '../ListProject'

const Projects = ({ reff }) => {
    const [projects, setProjects] = useState([])

    const token = useSelector((state) => state.auth.data)
    const config = {
        headers: getHeaderStructure(token)
    }

    useEffect(() => {
        const getProject = async () => {
            try {
                const result = await api.call(endpoints.projects, config)
                
                setProjects(result.data)
            } catch (err) {}
        }
        getProject()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])
    
  return (
    <section
      id="projects"
      ref={reff}
      className="text-center py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold mb-5">Projects</h2>

        <div className="row text-center d-inline-flex">{projects.length > 0 ? <ListProject projects={projects} /> : null}</div>
      </div>
    </section>

        // {projects.length > 0 ? <ListProject projects={projects} /> : null}
  )
}

export default Projects