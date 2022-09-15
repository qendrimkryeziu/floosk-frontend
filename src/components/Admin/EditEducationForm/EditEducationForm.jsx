import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"


const Input = ({ value, setValue, name, type='text', required=false}) => (
    <Form.Group>
        <Form.Label>{name}</Form.Label>
        <input 
          type={type}
          required={required}
          className="form-control"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }} 
          placeholder=""
        />
    </Form.Group>
)


const EditEducationForm = ({ education, edit }) => {
    const [title, setTitle] = useState(education.title)
    const [school, setSchool] = useState(education.school)
    const [city, setCity] = useState(education.city)
    const [startData, setStartData] = useState(education.startData)
    const [endData, setEndData] = useState(education.endData)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const data = {
            title,
            school,
            city,
            startData,
            endData,
        }
        edit(data)
    }
  return (
    <Form onSubmit={handleSubmit}>
        <h2>Details</h2>
        <Input setValue={setTitle} value={title} name="title" required={true} />
        <Input setValue={setSchool} value={school} name="school" required={true} />
        <Input setValue={setCity} value={city} name="city" required={true} />
        <Input setValue={setStartData} value={startData} name="startData" required={true} />
        <Input setValue={setEndData} value={endData} name="endData" required={true} />

        <div className="submit">
            <Button type="submit">Submit</Button>
        </div>
    </Form>
  )
}

export default EditEducationForm