import { combineReducers } from 'redux';
import slides from './slideHomeReducer';
import contact from './ContactInfoReducer'
import authenticate from './user'

export default combineReducers({
    slides: slides,
    contact: contact,
    user: authenticate
});