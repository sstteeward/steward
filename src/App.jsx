import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id="root">
      <header>
        <nav class="container">
          <img src="src\assets\react.svg" alt="LogoHead" />
          <ul>
            <li></li>
            <li>About Us</li>
          </ul>
        </nav>
      </header>
      <header>
        <nav class="container">
          <img src="src\assets\react.svg" alt="LogoHead" />
          <ul>
            <a href="/">Home</a> 
            <li>About Us</li>
          </ul>
        </nav>
      </header>
      <div class="bgReact">
        <div class="tag">
          <h1>Hello, I'm React</h1>
          <span class="react-span">"welcome reactors"</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum optio vel quam velit sunt, ex nihil ullam hic perspiciatis error iste accusamus tenetur possimus nam, tempora similique cumque dolorem eum.</p>
        </div>
        <div class="logo">
          <img src="src\assets\react-BsU1gje4 (1).png" alt="Logo in page" />
        </div>
      </div>
      <div class="bg container"> 
        <div class="logo">
          <img class="Go-img" src="src\assets\go-olnF5_TS (1).png" alt="Go" />
        </div>
        <div class="tag">
          <h1>Hello, I'm Go</h1>
          <span class="go-span">""welcome golangs</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum optio vel quam velit sunt, ex nihil ullam hic perspiciatis error iste accusamus tenetur possimus nam, tempora similique cumque dolorem eum.</p>
        </div>
      </div>
      <div class="bg2 container">
        <div class="tag">
          <h1>Hello, Rust</h1>
          <span class="rust-span">"welcome crustaceans"</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum optio vel quam velit sunt, ex nihil ullam hic perspiciatis error iste accusamus tenetur possimus nam, tempora similique cumque dolorem eum.</p>
        </div>
        <div class="logo">
          <img src="src\assets\rust-Du_Eg65M (1).png" alt="Logo in page" />
        </div>
      </div>
      <div class="container2">
        <div class="alogo">
          <img src="src\assets\rust-Du_Eg65M (1).png" alt="logo"/>
        </div>
        <div class="alogo">
          <img src="src\assets\react-BsU1gje4 (1).png" alt="logo"/>
        </div>
        <div class="alogo">
          <img src="src\assets\go-olnF5_TS (1).png" alt="logo"/>
        </div>
        <div class="alogo">
          <img src="src\assets\rust-Du_Eg65M (1).png" alt=""/>
        </div>
        <div class="alogo">
          <img src="src\assets\react-BsU1gje4 (1).png" alt=""/>
        </div>
        <div class="alogo">
          <img src="src\assets\go-olnF5_TS (1).png" alt="logo"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
