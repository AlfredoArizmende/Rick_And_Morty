import { Link } from "react-router-dom";
import style from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar"

const Nav = (props) => {
    
    return (
        <div className={style.container}>
            <Link className={style.menu} to='/home'>Home</Link>
            <Link className={style.menu} to='/about'>About</Link>
            <SearchBar onSearch={props.onSearch} />
        </div> 
    );
}

export default Nav;