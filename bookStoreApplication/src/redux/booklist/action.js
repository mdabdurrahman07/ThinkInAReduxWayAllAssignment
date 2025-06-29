import { ADDBOOK, LOADED } from "./actionTypes"

export const AddBook = (book) =>{
    return {type: ADDBOOK, payload: book}
}

export const LoadedBook = (books) => {
    return {type: LOADED , payload: books}
}