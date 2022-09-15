import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const EducationModal = ({ educations }) => {
  let navigate = useNavigate()

  const handleEdit = (education) => {
    navigate(`/education/${education._id}`)
  }

  const handleDelete = () => {
    alert('delete')
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>School Name</th>
          <th>City</th>
          <th>Date Start</th>
          <th>Date End</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {educations.map((elem, index) => (
          <tr key={elem._id}>
            <td>{++index}</td>
            <td>{elem.title}</td>
            <td>{elem.school}</td>
            <td>{elem.city}</td>
            <td>{elem.startData}</td>
            <td>{elem.endData}</td>
            <td>
            <div className="d-flex justify-content-evenly">
                <FontAwesomeIcon
                  role="button"
                  icon={faEdit}
                  onClick={() => {
                    handleEdit(elem)
                  }}
                />
                <FontAwesomeIcon role="button" icon={faTrash} onClick={handleDelete} />
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default EducationModal