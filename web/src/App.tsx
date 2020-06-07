import React from 'react';
import './App.css';
import Routes from './routes';
// import Home from './pages/Home';   //com as rotas não precisa mais importar o home desta maneira

function App() {
  return (
    <Routes />
  );
}

export default App;

  
  // const [counter, setCounter] = useState(0);   //exemplo de uso de state. lembrar de importar o useState

  // function handleButtonClick() {
  //   setCounter(counter + 1);
  // }

  // no return      
  /* <h1>{ counter }</h1>
  <button onClick={handleButtonClick}>Somar um</button> */