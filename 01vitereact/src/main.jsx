import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>i created this function in main .jsx </h1>
    </div>
  )
}

const ausername = "Vigo"

//down is the method to write in react it has a syntax so we cant write like in js
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',targe: '_blank' },
  'Click me to visit google',
  ausername
)

ReactDOM.createRoot(document.getElementById('root')).render(
    
    reactElement
    // <MyApp />
    // <App />
   
)
