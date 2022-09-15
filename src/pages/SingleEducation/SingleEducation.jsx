import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {api, endpoints } from '../../lib/api'
import { useSelector } from 'react-redux'
import { getHeaderStructure } from '../../lib/helper'
import EditEducationForm from '../../components/Admin/EditEducationForm'

const SingleEducation = () => {
    const { educationId } = useParams()

    const [education, setEducation] = useState()
    const [alert, setAlert] = useState(false)
    const [msg, setMsg] = useState('') 
    const [variant, setVariant] = useState('success')
    
    const token = useSelector((state) => state.auth.data)
    const config = {
        headers: getHeaderStructure(token),
        params: [educationId],
    }

    useEffect(() => {
        const getEducation = async () => {
            const result = await api.call(endpoints.singleEducation, config)
            setEducation(result.data)
        }
        getEducation()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [educationId])

    const handleEdit = async (data) => {
        const editConfig = {...config}
        editConfig.data = data
    

        try {
            await api.call(endpoints.editEducation, editConfig)
            setMsg('Superhero was successfully changed!')
            setVariant('success')
        } catch (err) {
            setMsg('Superhero was successfully changed!')
            setVariant('success')
        }
        setAlert(true)
    }
  return (
    <Container>
        <Row>
            <Col>{education && <EditEducationForm education={education} edit={handleEdit} />}</Col>
        </Row>
    </Container>
  )
}

export default SingleEducation