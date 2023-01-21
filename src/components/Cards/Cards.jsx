import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters, onClose } = props;
   
   return (
      <div className={style.contendedor}>
         {
            characters.map(character => {
               return (
                  <Card
                     key={character.id}
                     id={character.id}
                     name={character.name}
                     species={character.species}
                     gender={character.gender}
                     image={character.image}
                     status={character.status}
                     onClose={() => onClose(character.id)}
                  />
               )
            })
         }
      </div>
   );
}
