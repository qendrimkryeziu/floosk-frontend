import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const Login = ({ submit, setMessage }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            email,
            password,
        }
        submit(data)
    }

    return (
        <Container>
            <Row className="align-itens-center vh-100">
                <Col xs={12} sm={10} md={7} lg={6} className="bg-white mx-auto">
                    <div className="login f-flex align-items-center pb-5 pt-5">
                        <Container>
                            <Row>
                                <Col md={12} lg={12} className='mt-4'>
                                    <h2 className='login-header mb-4 text-center text-danger mb-5'>
                                        Login only for administrator !
                                    </h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-label-group mb-4">
                                            <input 
                                             type="text"
                                             id="inputEmail"
                                             value={email}
                                             className="form-control shadow-none"
                                             onChange={(e) => {
                                                setEmail(e.target.value)
                                             }}
                                             placeholder='Email address'
                                            />
                                        </div>

                                        <div className="form-label-group mb-4">
                                            <input 
                                             type="password"
                                             id="inputPassword"
                                             className='form-control shadow-none'
                                             value={password}
                                             onChange={(e) => {
                                                setPassword(e.target.value)
                                            }}
                                             placeholder='Password' 
                                            />
                                        </div>

                                        <input 
                                         className='btn btn-lg btn-primary btn-block shadow-none btn-login form-control text-uppercase font-weight-bold mb-2'
                                         type="submit"
                                         value="Log In"
                                        />
                                    </form>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
            </Row>
        </Container>   
    )
}

export default Login