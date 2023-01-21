import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App () {
  const [characters, setCharacters] = useState([]);
  let location = useLocation().pathname;

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  // Código para Simulacion de Seguridad
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'alfredo@arizmende.com';
  const password = 'Rocco31';

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='' element={<Form login={login} />} />
        <Route path='home' element={<Cards onClose={onClose} characters={characters}/>} />
        <Route path='about' element={<About/>} />
        <Route path='detail/:detailId' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App
