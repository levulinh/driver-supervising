import type from './type'
import axios from 'axios'
import api from '../api';


export const fbLogin = accessToken => dispatch => api.user.fbLogin(accessToken).then(user => {
    dispatch(fbLoginSuccess(user))
})

export const fbLoginSuccess = (user) => {
    return {
        type: type.FB_LOGIN,
        user
    }
}
export const ggLogin = accessToken => dispatch => api.user.ggLogin(accessToken).then(user => {
    dispatch(ggLoginSuccess(user))
})

export const ggLoginSuccess = (user) => {
    return {
        type: type.GG_LOGIN,
        user
    }
}

export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        dispatch(loginSuccess(user))
    });

export const autoLogin = () =>
    (dispatch) => api.user.autoLogin().then(user => {
        dispatch(autoLoginSuccess(user))
    })
        .catch(error => {
            console.log(error);

        })



export const signUp = (user) => (dispatch) => api.user.signUp(user).then(user => {
    dispatch(signUpSuccess(user))
});

export const signUpSuccess = (user) => {
    return {
        type: type.SIGN_UP,
        user
    }
}

export const autoLoginSuccess = (user) => {

    return {
        type: type.AUTOLOGIN,
        user
    }
}

export const loginSuccess = (user) => ({
    type: type.LOGIN,
    user
})

export const signOut = () => {
    return (dispatch) => {
        return axios.get('/users/signOut')
            .then(response => {
                dispatch(signOutSuccess())
            })
            .catch(error => {
                throw error
            })
    }

}

export const signOutSuccess = () => {
    return {
        type: type.SIGNOUT
    }
}
