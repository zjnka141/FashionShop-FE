import React from 'react'
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    fetch('http://localhost:8080/profile', {
      method: 'GET',
      credentials: 'include'
    }).then(data => data.json()).then((data) => {console.log("AAAA", data)});
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Services;
