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
  console.log("ok")
  const { data } = await axios.get(`http://localhost:8080/search/${query}`)
  setPosts(data);
  console.log(data,query)
};


  return (
  <div>
<Navbar/>
    <div className="search">
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
        Description={post.description}
        price={post.price}
        />
      ))}
      </div>
    </div>
  )
}

export default Search