import { BrowserRouter } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import type from '../actions/type'



const Authenticate = (state = {}, action = {}) => {
    switch (action.type) {
        case type.REGISTER:
            // getUser();
            return state
        case type.LOGIN:

            return action.user
        case type.ADD_STUDENT:

            return action.student
        case type.ALL_STUDENTS:

            return action.students

        case type.SIGNOUT:
            document.cookie = "userId=" + action.user._id;
            return { ...state, isAuthenticated: false }
        case type.AUTOLOGIN:

            return action.user
        case type.FB_LOGIN:
            return { ...state, info: action.user, isAuthenticated: true }
        case type.GG_LOGIN:
            return { ...state, info: action.user, isAuthenticated: true }
        default:
            return state
    }
}

export default Authenticate;