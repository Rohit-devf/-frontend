import React from 'react'
import Card from './components/card'
const App = () => {
  return (
  <div className="parent">
    <Card user='Ayushi' age={18} img="https://images.pexels.com/photos/19544645/pexels-photo-19544645/free-photo-of-portrait-of-smiling-woman.jpeg"/>
    <Card user='rohit' age={22} img='https://thumbs.dreamstime.com/b/happy-black-teen-boy-outside-african-american-smiles-sitting-bench-192130399.jpg'/>
    <Card user='Gungun' age={25} img='https://media.istockphoto.com/id/1369877224/photo/portrait-of-attractive-young-school-boy-white-background-stock-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=LuPelrCvjncbnZrEoj5Zf58Sl2pMBxgsKcLMCxtBvN0='/>
  
  </div>

  )
}

export default App
