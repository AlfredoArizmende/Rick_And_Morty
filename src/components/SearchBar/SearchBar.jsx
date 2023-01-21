import { useState } from "react";
import style from './SearchBar.module.css'

const SearchBar = (props) => {

   const [character, setCharacter] = useState('');
   
   const handleInput = (event) =>{
      setCharacter(event.target.value)
   }

   return (
      <div className={style.bar}>
         <input className={style.barInput} type='search' value={character} onChange={handleInput} placeholder='Ingresa un ID...' />
         <button className={style.btnSearch} onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}

export default SearchBar;
