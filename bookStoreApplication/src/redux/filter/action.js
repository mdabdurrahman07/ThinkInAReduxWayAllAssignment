import { SEARCH } from "./actionTypes"

export const search = (text) => {
    return {
        type: SEARCH,
        payload: text
    }
}