// my attempt at using rick and morty api for this application

// import { useState, useEffect } from 'react'
// import './App.css';
// import EpisodeForm from './Components/EpisodeForm';
// import UpdateForm from './Components/UpdateForm';


// function App() {

//   const [characters, setCharacters] = useState([])

//   const fetchCharacters = async () => {
//     const res = await fetch('https://rickandmortyapi.com/api/character')
//     const data = await res.json()
//     console.log(data);
//     setCharacters(data)
//   }
  

//   // delete portion of crud
//   const deleteCharacter = async (id) => {
//     const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`, {
//       method: 'DELETE'
//     })
//     console.log(res.status);
//   }

//   useEffect(() => {
//     fetchCharacters()
//   }, [])

  
//   const charactersArray = Array.from(characters);

//   return (
//     <div className='App'>
//       <EpisodeForm />
//       <UpdateForm />
  
//       {charactersArray.map(character => (
//         <p key={character.id} onClick={() => deleteCharacter(character.id)}>
//           {character.image}
//         </p>
//       ))}
//     </div>
//   )
  
// }

// export default App




import { useState, useEffect } from 'react'
import './App.css';
import EpisodeForm from './Components/EpisodeForm';
import UpdateForm from './Components/UpdateForm';



function App() {

  const [photos, setPhotos] = useState([])

  const fetchPhotos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
    const data = await res.json()
    setPhotos(data)
  }

  useEffect(() => {
    fetchPhotos()
  }, [])


  // delete portion of crud
  const deletePhoto = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`, {
      method: 'DELETE'
    })
    console.log(res.status);
  }

 

  return (
    <div className='App'>
      {/* {console.log(photos)} */}
      <EpisodeForm />
      <UpdateForm />
      {/* get request on line 96  Retrieve portion of CRUD*/}
      <h3>Click on any lorem ipsum Text to delete</h3>
      <div className='get'>
        {photos.map(photo => <p key={photo.id} onClick={() => deletePhoto(photo.id)}>{photo.title}</p>)}
      </div>
    </div>
  )
}

export default App

