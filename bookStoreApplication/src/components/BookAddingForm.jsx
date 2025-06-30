import { useDispatch, useSelector } from "react-redux";
import addBooks from "../redux/booklist/thunk/addBooks.js";
import { useEffect, useState } from "react";
import updateBookList from "../redux/booklist/thunk/updateBookList.js";
const BookAddingForm = ({editingBook, setEditingBook}) => {
  const book = useSelector((state) => state.bookList)
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState("")
  const [rating, setRating] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const [featured, setFeatured] = useState(false)
   const generateId = () => {
  if (!book || book.length === 0) return 1;
  const maxId = Math.max(...book.map((p) => Number(p.id)));
  return maxId + 1;
};
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.featured = !!featured
    const id = generateId();
    let updateId = editingBook?.id
    if(editingBook){
      dispatch(updateBookList({updateId , ...data}))
    }
    else{
      dispatch(addBooks({id, ...data}))
    }
    form.reset()
    setEditingBook(null)
  };
  useEffect(() =>{
    if(editingBook){
      setName(editingBook.name)
      setAuthor(editingBook.author)
      setThumbnail(editingBook.thumbnail)
      setPrice(editingBook.price)
      setRating(editingBook.rating)
      setFeatured(editingBook.featured)
    }else{
      setName("")
      setAuthor("")
      setThumbnail("")
      setPrice("")
      setRating("")
      setFeatured(false)
    }
  },[editingBook])
  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
        <form onSubmit={handleSubmit} className="book-form">
          <div className="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label for="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={price}
              onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label for="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                value={rating}
              onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            <label for="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {editingBook ? "Update Book" : "Add Book"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookAddingForm;
