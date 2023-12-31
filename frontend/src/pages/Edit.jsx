import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const nav = useNavigate();
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8080/product/" + id)
      .then((res) => {
        settitle(res.data.title);
        setdescription(res.data.description);
        setprice(res.data.price);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); // Include 'id' in the dependency array

  const editproduct = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8080/product/" + id, { title, description, price })
      .then(() => {
        nav("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={editproduct}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTfjaQjtKf_ZucPWOEpGkTQyZ0neKdV8g1Zg&usqp=CAU"></img> 
        <label>Title:</label>
        <br />
        <input type="text" value={title} onChange={(e) => settitle(e.target.value)}></input>
        <label>Description:</label>
        <br />
        <input type="text" value={description} onChange={(e) => setdescription(e.target.value)}></input>
        <label>Price:</label>
        <input type="number" min={0} value={price} onChange={(e) => setprice(e.target.value)}></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Edit;
