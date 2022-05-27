import React from 'react'
import Forms from './Forms'
import Header from './smilebots/Header'
import UseContext from './smilebots/UseContext'
import Home from "./smilebots/Home"

const App = () => {
  return (
    <div>
   <Header/>
   <UseContext>
     <Home/>
   </UseContext>
    </div>
  )
}

export default App


