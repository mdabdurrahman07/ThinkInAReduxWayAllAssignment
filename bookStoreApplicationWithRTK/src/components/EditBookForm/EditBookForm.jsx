import { useState } from "react";
import { useUpdateBookMutation } from "../../redux/features/Books/BooksApiSlice";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";

const EditBookForm = ({ book }) => {
  const navigate = useNavigate()
  const {
    name: defaultName,
    author: defaultAuthor,
    thumbnail: defaultThumbnail,
    price: defaultPrice,
    rating: defaultRating,
    featured: defaultFeatured,
    id,
  } = book || {};
  const [updateBook, { isLoading }] = useUpdateBookMutation(id);
  const [name, setName] = useState(defaultName);
  const [author, setAuthor] = useState(defaultAuthor);
  const [thumbnail, setThumbnail] = useState(defaultThumbnail);
  const [price, setPrice] = useState(defaultPrice);
  const [rating, setRating] = useState(defaultRating);
  const [featured, setFeatured] = useState(defaultFeatured);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateBook({
      id,
      data: {
        name,
        author,
        thumbnail,
        price,
        rating,
        featured,
      },
    });
    if (isLoading) {
      <Loading />;
    } else {
      navigate('/')
    }
  };
  return (
    <div className="container">
      <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
        <h4 className="mb-8 text-xl font-bold text-center">Edit Book</h4>
        <form className="book-form" onSubmit={handleUpdate}>
          <div className="space-y-2">
            <label htmlFor="lws-bookName">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-bookName"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-author">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lws-thumbnail">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="lws-thumbnail"
              name="thumbnail"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="lws-price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="lws-price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="lws-rating">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="lws-rating"
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
              id="lws-featured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
            />
            <label htmlFor="lws-featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button
            disabled={isLoading}
            type="submit"
            className="submit"
            id="lws-submit"
          >
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBookForm;
