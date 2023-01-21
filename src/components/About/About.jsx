import style from './About.module.css';
import imageAlfredo from '../../images/DS2_0101.jpg'
const About = () => {
    return (
        <div className={style.detail}>
            <img src={imageAlfredo} alt="Alfredo" />
            <div className={style.aboutText}>
                <h1>About me</h1>
                <h2>Alfredo <span>Arizmende</span></h2>
                <p>Soy un apasionado por la tecnología y me encanta aprender cosas nuevas para resolver cualquier tipo de problema. Soy de esas personas que no se detienen hasta encontrar la solución a un problema y resolverlo de la manera más eficiente.</p>
            </div>
        </div>
    );
}

export default About;