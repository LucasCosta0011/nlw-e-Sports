interface buttonProps{
  title: String,
}

function Button(props: buttonProps){
  return (
    <button>
      {props.title}
    </button>
   )
}
 

function App() {
  return (
    <div>
      <h1>Hello NLW</h1>
      <Button title="Teste" />
    </div>
  )
}

export default App
