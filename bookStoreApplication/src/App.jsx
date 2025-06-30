import { useState } from "react";
import BookAddingForm from "./components/BookAddingForm";
import BookCard from "./components/BookCard";
import Nav from "./components/Nav";

const App = () => {
  const [value, setValue] = useState(false);
  const [editingBook , setEditingBook] = useState(null)
  return (
    <>
      {/* Nav section */}
      <Nav />
      <main className="py-12 2xl:px-6">
        <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div className="order-2 xl:-order-1">
            <div className="flex items-center justify-between mb-12">
              <h4 className="mt-2 text-xl font-bold">Book List</h4>

              <div className="flex items-center space-x-4">
                <button onClick={() => setValue(!value)} className="filter-btn active-filter" id="lws-filterAll">
                  All
                </button>
                <button
                  onClick={() => setValue(!value)}
                  className="filter-btn"
                  id="lws-filterFeatured"
                >
                  Featured
                </button>
              </div>
            </div>
            <div className="lws-bookContainer">
              {/* <!-- Card 1 --> */}
              <BookCard value={value} editingBook={editingBook} setEditingBook={setEditingBook}/>
              {/* <!-- Card 1 --> */}
            </div>
          </div>
          {/* Form */}
          <BookAddingForm editingBook={editingBook} setEditingBook={setEditingBook}/>
          {/* Form */}
        </div>
      </main>
    </>
  );
};

export default App;
