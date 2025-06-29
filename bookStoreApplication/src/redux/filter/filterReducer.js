import { SEARCH } from "./actionTypes";
const initialState = {}

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEARCH:
            
            return [...state, action.payload]
    
        default:
            return state
    }
}

export default reducer