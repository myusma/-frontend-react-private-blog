import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './Login.css';
import user from "../../data/user.json";


const Login = ({toggleIsAuthenticated}) => {

    const [formState, setFormState] = useState({
        email: "",
        password: "",

    });

    const navigate = useNavigate()

    function handleLogin() {

        const field = user.find((log) => {
            return log.emailadres === formState.email
        })
        console.log(field)

        if (field.emailadres === formState.email && field.password === formState.password) {
            toggleIsAuthenticated(true);
            navigate("/blogposts")
        }
        // else if(field.emailadres !== formState.email && field.password !== formState.password){
        //     toggleIsAuthenticated(false);
        //
        // }
    }


    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        console.log(handleChange)

        setFormState({
            ...formState,
            [changedFieldName]: newValue,
        });
    }


    return (

        <div className='login'>
            <h1>Login pagina</h1>
            <p>Vul hieronder uw e-mailadres en wachtwoord in om in te loggen!</p>



            <form>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleChange}/>

                </div>
                <div>
                    <label htmlFor="password">Wachtwoord:</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        value={formState.password}
                        onChange={handleChange}/>
                </div>


                <button
                    className='button-login'
                    type='button'
                    onClick={handleLogin}
                >
                    Inloggen

                </button>
            </form>

        </div>


    );
};

export default Login;