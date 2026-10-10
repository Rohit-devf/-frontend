import React from 'react'

const card = (propes) => {
   
 
  return (
    
    <div>
<div className="card">
<img src={propes.img}alt="image is loading" />  <h1>{propes.user}</h1>
  <h3>i am {propes.age} year old</h3>
  <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit.
</p>
  <button>View Profile</button>
</div> 
    </div>
  )

}

export default card
