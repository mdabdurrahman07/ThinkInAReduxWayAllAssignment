import { combineReducers } from "redux";
import bookListReducer from "./booklist/bookListReducer"
import filterReducer from "./filter/filterReducer"
const allReducer = combineReducers({
    bookList: bookListReducer,
    filter: filterReducer,
})

export default allReducer