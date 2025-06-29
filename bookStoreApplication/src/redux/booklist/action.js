import { ADDBOOK } from "./actionTypes"

export const AddBook = (book) =>{
    return {type: ADDBOOK, payload: book}
}