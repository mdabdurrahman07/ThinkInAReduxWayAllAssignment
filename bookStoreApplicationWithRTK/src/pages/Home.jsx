import React from "react";
import BookCardsContainer from "../components/BookCardsContainer/BookCardsContainer";
import Tabs from "../components/Tabs/Tabs";

const Home = () => {
  return (
    <div class="py-12 px-6 2xl:px-6 container">
      <Tabs/>
      <BookCardsContainer />
    </div>
  );
};

export default Home;
