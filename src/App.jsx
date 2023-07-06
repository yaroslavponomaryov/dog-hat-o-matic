import { useState } from 'react'
import dogHatImgs from './assets/dog-hat'
import './App.css'


function App() {
  // const header = "It's patry time!"
  const [header, setHeader] = useState("It's time to be serious")
  const [image, setImage] = useState(dogHatImgs[1])

  const linkChanger = () => {
    if (image === dogHatImgs[1]) {
      return setImage(dogHatImgs[0]), setHeader("It's party time!")
    } else {
      return setImage(dogHatImgs[1]), setHeader("It's time to be serious")
    }
  }

  return (
    <>
    <div class="wrapper">
    <h1 class="header">{header}</h1>
      <div class="flex-container">
      <img src={image} class="img"></img>
      <button onClick={linkChanger} class="button">Wear/unwear a hat!</button>
      </div>
    </div>
    </>
  )
}

export default App
