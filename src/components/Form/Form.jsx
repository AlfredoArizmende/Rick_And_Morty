import style from './Form.module.css';
import { useState } from "react";
import { validate } from "./validation";

const Form = (props) => {
    const [userData, setUserData] = useState({ 
        username: '',
        password: '' 
    });

    const [errors, setErrors] = useState({
        username: '', 
        password: '', 
    });

    const handleInputChange  = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
        
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }
    

    return (
        <div className={style.container}>
            <div className={style.form}>
                <form onSubmit={handleSubmit}>
                    <h2 className={style.title}>Login</h2>
                    {errors.username && <p className={style.danger} >{errors.username}</p>}
                    {errors.password && <p className={style.danger} >{errors.password}</p>}
                    <div className={style.inputBox}>
                        <input className={style.inputInput} name="username" value={userData.username} type="text" onChange={handleInputChange} autocomplete="off" />
                        <label className={style.inputLabel} htmlFor="username">Username</label>
                    </div>
                    <div className={style.inputBox}>
                        <input className={style.inputInput} name="password" value={userData.password} type="password" onChange={handleInputChange} autocomplete="off" />
                        <label className={style.inputLabel} htmlFor="password">Password</label>
                    </div>                
                    <button className={style.btnLogin}>Login</button>
                    <div className={style.access}>
                        <p>Usa estos acesos:</p>
                        <p><strong>alfredo@arizmende.com</strong> & <strong>Rocco31</strong></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;