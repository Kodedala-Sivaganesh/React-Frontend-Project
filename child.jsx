import React from 'react'
import App from './App'
import "./App.css";


export default function Child({Name,Age,City,Email,Mobile,Occupation,Address}) {
  
  return (
    <div className='card'>
      <div className='details'>
      <p><strong>Name :</strong> {Name}</p>
      <p><strong>Age :</strong> {Age}</p>
      <p><strong>City :</strong> {City}</p>
      <p><strong>Email :</strong> {Email}</p>
      <p><strong>Mobile Number : </strong>{Mobile}</p>
      <p><strong>Occupation : </strong>{Occupation}</p>
      <p><strong>Address : </strong>{Address}</p>
    </div>
    </div>
  )
}
