const endpoints = {
    home: { url: '/', method: 'GET'},
    login: { url: '/users/login', method: 'POST'},
    educations: { url: '/education/', method: 'GET' },
    projects: { url: '/project/', method: 'GET' },
    singleEducation: { url: '/education/', method: 'GET' },
    editEducation: { url: '/education/:educationId', method: 'PUT' },
}

export default endpoints