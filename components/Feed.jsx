"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => {
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />;
      })}
    </div>
  );
};

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  // search state variables
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchAllPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    console.log("*************", data);
    setAllPosts(data);
  };

  const handleSearchChange = (e) => {};

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={allPosts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
