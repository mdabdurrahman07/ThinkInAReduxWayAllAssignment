import { Delete } from "../booklist/action"

const deleteBookList = (id) =>{
    return async (dispatch) =>{
        await fetch(`http://localhost:9000/books/${id}`,{
            method: "DELETE"
        })
        dispatch(Delete(id))
        
    }
}

export default deleteBookList