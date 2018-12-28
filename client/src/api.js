import axios from 'axios'

export default {
    user: {
        login: credentials =>
            axios.post('/api/admin/login', { email: credentials.email, password: credentials.password })
                .then(res =>
                    res.data.user
                ),

        autoLogin: () => axios.get('/users/auto-login')
            .then(response => response.data),
        signUp: (user) => axios.post('/users/signUp', {
            email: user.email, password: user.password, firstName: user.firstName,
            lastName: user.lastName, middleName: user.middleName, name: user.lastName + " " + user.middleName + " " + user.firstName
        })
            .then(response => response.data.user),
        fbLogin: accessToken => axios.post('/users/oauth/facebook', { access_token: accessToken })
            .then(res => res.data.user),
        ggLogin: accessToken => axios.post('/users/oauth/google', { access_token: accessToken })
            .then(res => res.data.user),

    },
    admin: {
        addStudent: credentials =>
            axios.post('/api/user/add', {
                idCode: credentials.idCode,
                fullName: credentials.fullName,
                phone: credentials.phone,
                dob: credentials.dob,
                certiType: credentials.certiType
            })
                .then(
                     
                    res =>
                    res.data.user
                ),
        allStudents: () =>
            axios.get('/api/user/all').then(
                res => res.data.users
            )
                .catch(e =>
                    console.log(e.toString())),


    }
}