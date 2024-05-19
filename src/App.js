import './App.css';
import logoPrincipal from './img/logo.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {
  const [numclicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks (numclicks + 1);

  }

  const reiniciarContador = () => {
    setNumClicks (0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo-principal'
          src={logoPrincipal}
          alt='logo princpal' />
      </div>



      <div className='contenedor-contador'>
        <Contador numclicks= {numclicks} />
        <Boton
          texto='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick} />

        <Boton
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} />
      </div>

    </div>
  );
}

export default App;
