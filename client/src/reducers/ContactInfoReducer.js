import type from '../actions/type'
const ContactInfoReducer = (state = [], action) => {
    switch (action.type) {
        case type.FETCH_CONTACT:
            console.log('lien he', action.contact)
            return action.contact
        case "update contact info":
            return state
        default:
            return state
    }
}
export default ContactInfoReducer;