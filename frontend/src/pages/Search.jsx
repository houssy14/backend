import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Card from '../components/Card';
import '../App.css';

const Search = () => {
const [query, setQuery] = useState("");
const [posts, setPosts] = useState([]);

const searchPosts = async (e) => {
  e.preventDefault();
  const { data } = await axios.get(`http://localhost:3000/search/${query}`)
  setPosts(data);
};

  return (
    <div className="search">
      <Navbar/>
      <form onSubmit={(e) => searchPosts(e)}>
        <input
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        value={query}
        />
        <input type="submit" value="recherche"/>
      </form>
      {posts.map((post) => (
        <Card
        key={post._id}
        id={post._id}
        title={post.title}
        author={post.author}
        category={post.category}
        />
      ))}
    </div>
  )
}

export default Search