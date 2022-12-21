import styles from './SignIn.module.scss';
// import AuthService from '../../api-service/APIService';
import { Link, useNavigate } from 'react-router-dom';
import * as React from 'react';
import { useEffect } from 'react';

export const SignIn = () => {

    // const navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     AuthService.login({
    //         userName: data.get('email'),
    //         password: data.get('password'),
    //     }).then((res) => {
    //         localStorage.setItem("authData", res)
    //         navigate('/schedule')
    //         window.location.reload(false);
    //     })
    // };

    // const [isLoggedIn, setLoggedIn] = React.useState(false);

    // function CheckIfUserIsLoggedIn() {
    //     let res = localStorage.getItem("authData");

    //     res == null ? setLoggedIn(false) : setLoggedIn(true);
    // }

    // useEffect(() => {
    //     CheckIfUserIsLoggedIn()
    // })

    return (
        <main className={styles.SignInMain}>
            <h1>Sign In</h1>
            <form method="post">
                <div className={styles.SignInMainTxt}>
                    <input type="email" required />
                    <span></span>
                    <label>E-mail</label>
                </div>

                <div className={styles.SignInMainTxt}>
                    <input minlength="8" type="password" required />
                    <span></span>
                    <label>Password</label>
                </div>

                <div className={styles.pass}>
                    <Link href="ForgotPassword.html"> Forgot Password?</Link>
                </div>
                <input type="submit" value="Login" />
                <div className={styles.signUpLink}>
                    Not a member? <Link to="register">Signup</Link>
                </div>
            </form>
        </main>
    )
}
// onClick={handleSubmit}

