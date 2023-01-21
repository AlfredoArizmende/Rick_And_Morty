import { Link } from 'react-router-dom';
import style from './Card.module.css';

const Card = (props) => {
   const imageStyle = {
      backgroundImage: `url(${props.image})`
   }
   return (
      <div className={style.card}>
         <div style={imageStyle} className={style.cardImage}>
         <button className={style.btnClose} onClick={props.onClose}>&times;</button>
         </div>
         <div className={style.cardText}>
            <span>Name:</span>
            <Link to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt inventore porro nulla consequuntur quidem!</p>
         </div>
         <div className={style.cardStats}>
            <div className={style.stat}>
               <div className={style.value}>{props.species}</div>
               <div className={style.type}>Specie</div>
            </div>
            <div className={`${style.stat} ${style.border}`}>
               <div className={style.value}>{props.gender}</div>
               <div className={style.type}>Gender</div>
            </div>
            <div className={style.stat}>
               <div className={style.value}>{props.status}</div>
               <div className={style.type}>Status</div>
            </div>
         </div>
      </div>
   );
}

export default Card;
