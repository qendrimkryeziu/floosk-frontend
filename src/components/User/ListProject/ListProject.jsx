import React from 'react'
import {Row, Col} from 'react-bootstrap'
import ProjectCard from '../ProjectCard'

const ListProject = ({ projects }) => {
  return (
    <Row>
        {projects.map((elem) => {
            return (
                <Col md={4} lg={4} key={elem._id}>
                    <ProjectCard data={elem} />
                </Col>
            )
        })}
    </Row>
  )
}

export default ListProject