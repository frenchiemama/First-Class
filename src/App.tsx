import { useState } from 'react'
import weedMapsLogo from './assets/weedmapslogo.svg'
import firstLogo from '/fcclogo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://weedmaps.com/" target="_blank">
          <img src={weedMapsLogo} className="logo react" alt="Weed Maps Logo" />
        </a>
        <a href="https://www.instagram.com/firstclassconcentrates_/" target="_blank">
          <img src={firstLogo} className="logo" alt="First Logo" />
        </a>
      </div>
      <h1>FIRST CLASS CONCENTRATES</h1>
      <p>California Grown. Sonoma County, CA<br></br>
      License #: CDL1009CA500098
      <br></br>
      <br></br>
           Menu February 2025<br></br>
           <br></br>
           <p>Butter, Diamonds, Crumble</p>
      </p>
      <div></div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Classic Concentrates {count}
        </button><br></br>
        <p>
        </p>
      </div>
      <p className="read-the-docs">
    
      </p>
    </>
  )
}

export default App
