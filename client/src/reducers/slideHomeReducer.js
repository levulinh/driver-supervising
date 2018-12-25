import type from '../actions/type'


export default function SlideHomeReducer(state = [], action) {
    switch (action.type) {
        case type.FETCH_SLIDE_HOME:

            return action.slides;

        case "ACTION_TYPE_2":
            return state
        default:
            return state
    }
}

