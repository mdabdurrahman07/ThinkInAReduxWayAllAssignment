import { Update } from "../action";

const updateBookList = ({updateId, ...data}) => {
  console.log(updateId)
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${updateId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
       headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
     
    });
    const updatedBook = await response.json()
    dispatch(Update(updatedBook))
  };
};

export default updateBookList;
