import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui);

    //Para redux
    const [formValues, handleInputChange ] = useForm({
        email: 'elpepe@gmail.com',
        password: '123456'
    })

    const { email, password }= formValues;
    // --> Lo paso a los inputs

    const handleLogin= (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin= () => {
        dispatch(startGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form onSubmit= {handleLogin} >
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value= {email}
                    onChange= {handleInputChange}   
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    className="auth__input"    
                    value= {password}
                    onChange= {handleInputChange}   
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled= {loading}
                >
                    Ingresar
                </button>

                <div className="auth__social-networks">
                    <p>Registro redes sociales</p>

                    <div 
                        className="google-btn"
                        onClick= {handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Entrar con Google</b>
                        </p>
                    </div>
                </div>

                <Link to= "/auth/register" className="link">
                    Crear cuenta nueva
                </Link>

            </form>


        </>
    )
}
