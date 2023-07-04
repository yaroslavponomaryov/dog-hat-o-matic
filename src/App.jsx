import { useState } from 'react'
import dogHatImgs from './assets/dog-hat'
import './App.css'


function App() {
  // const header = "It's patry time!"
  const [header, setHeader] = useState("It's time to be serious")
  const [image, setImage] = useState(dogHatImgs[1])
  const [gif, setGif] =useState()
  const linkChanger = () => {
    if (image === dogHatImgs[1]) {
      const body = document.getElementById("body")
      body.classList.add("party")
      body.classList.remove("serious")
      return setImage(dogHatImgs[0]), setHeader("It's party time!"),setGif("https://media.tenor.com/wt3RTvjtRC4AAAAi/dancing-dance.gif")
    } else {
      body.classList.add("serious")
      body.classList.remove("party")
      return setImage(dogHatImgs[1]), setHeader("It's time to be serious"),setGif() 
    }
  }

  return (
    <>
    <div className="wrapper">
    
    {/* <div className="test">
    </div> */}
    <h1 className="header">{header}</h1>
      
      
        <div className="flex-container">
      <div className="gif1"><img id="dog1" src={gif}></img></div>
        <img src={image} className="img"></img>
        <div className="gif2"><img id="dog2" src={gif}></img></div>
        </div>
        <button onClick={linkChanger} className="button">Wear/unwear a hat!</button>
        
        
    </div>
    
    
    </>
  )
}

export default App
