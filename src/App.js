import './App.css'
import axios from 'axios'
import {useState, useEffect} from 'react'

const url = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps'

const config = {
  headers:{
    'X-Api-Key': '7gnw8gOd8L/b9qSrLCRZ8A==EsqlCY0XRIff0uYl'
  }
}

function App() {
  const [exercises, setExercises] = useState([])

  const getExercises = () => {
    axios.get(url, config)
    .then(res => setExercises(res.data))
    .catch(err => console.log(err))
  }

  getExercises()

  

  return (
    <div className="App">
      <h1>Get Swole</h1>
      {exercises.map((exercise) => {
        return (
          <div>{exercise.name}</div>
        )
      })}
    </div>
  )
}

export default App;

// 7gnw8gOd8L/b9qSrLCRZ8A==EsqlCY0XRIff0uYl
