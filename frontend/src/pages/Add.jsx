import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Add = () => {
  const[title, settitle]=useState("")
  const[description, setdescription]=useState("")
  const[price, setprice]=useState(0)
  const navigate=useNavigate()
  const addproduct=(e)=>{
   e.preventDefault()
    axios.post("http://localhost:8080/product",{
      title,description,price
    })
    .then(()=>navigate("/"))
    .catch((err)=>console.log(err))
    
  

}
  return (
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkc6zV3ivXBPvHTrKbLQmXYPhEtB1u7n4eA&usqp=CAU'></img>
      <form onSubmit={addproduct}>
        <label>Title:</label>
        <input type="text" onChange={(e)=>settitle(e.target.value)}></input>
        <label>Description:</label>
        <input type="text" onChange={(e)=>setdescription(e.target.value)}></input>
        <label>Price:</label>
        <input type="number" min={0} onChange={(e)=>setprice(e.target.value)}></input>
        <input type="submit"></input>

    <label>Time:</label>
    <input type="time"></input>

      </form>
    </div>
  )
}

export default Add