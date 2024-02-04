import Vigo from "./Vi"

//Here the app is function in that html is being returned so that in main.jsx will render it
function App() {
  const username = "Vigo"
  return (
    <>
    <Vigo/>
    <h1>My name is {username}</h1>
    <p>hi if you want to return multiple tag put it in <> between these h</> </p>
    </>   
  )
}

export default App
