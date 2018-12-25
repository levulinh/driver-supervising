import type from './type'
import axios from 'axios'

export const fetchSlide = (slides) => {
    return {
        type: type.FETCH_SLIDE_HOME,
        slides
    }
}

export const fetchAllSlide = () => {
    return (dispatch) => {
        return axios.get('/getSlideHome').then(response => {
            dispatch(fetchSlide(response.data))
        })
            .catch(error => {
                throw (error);
            });
    }
}

export const fetchContact = (contact) => {
    return {
        type: type.FETCH_CONTACT,
        contact
    }
}

export const fetchContactFromRemote = () => {
    return (dispatch) => {
        return axios.get('/get-contact').then(response => {
            console.log('data',response.data)
            dispatch(fetchContact(response.data))
        })
            .catch(error => {
                throw (error);
            });
    }
}