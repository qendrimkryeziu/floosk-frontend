import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import EducationTable from '../../components/Admin/EducationModal'
import { api, endpoints } from '../../lib/api'
import { getHeaderStructure } from '../../lib/helper' 

const EducationAdmin = () => {
    
    const token = useSelector((state) => state.auth.data)
    
    const config = {
        headers: getHeaderStructure(token),
    }

    const [educations, setEducations] = useState([])

    useEffect(() => {
        const getEducations = async () => {
            const result = await api.call(endpoints.educations, config)
            setEducations(result.data)
            console.log(result.data);
        }
        getEducations()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <Container>
        <Row>
            <Col>
                <EducationTable educations={educations} />
            </Col>
        </Row>
    </Container>
  )
}

export default EducationAdmin