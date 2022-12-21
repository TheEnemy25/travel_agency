import styles from './SignUp.module.scss';

export const SignUp = () => {
    return (
        <main className={styles.signUpMain}>
            <h1>Sing Up</h1>
            <form method="post">
                <div className={styles.signUpMainTxt}>
                    <input type="text" required />
                    <span></span>
                    <label>Name</label>
                </div>

                <div className={styles.signUpMainTxt}>
                    <input type="text" required />
                    <span></span>
                    <label>Surname</label>
                </div>

                <div className={styles.signUpMainTxt}>
                    <input type="email" required />
                    <span></span>
                    <label>E-mail</label>
                </div>

                <div className={styles.signUpMainTxt}>
                    <input type="number" required />
                    <label>Phone</label>
                </div>

                <div className={styles.signUpMainTxt}>
                    <input minlength="8" type="password" required />
                    <label>Password</label>
                </div>

                <div className={styles.signUpMainTxt}>
                    <input minlength="8" type="password" required />
                    <label>Password</label>
                </div>

                <input type="submit" value="Login" />
            </form>
        </main>
    )
}
