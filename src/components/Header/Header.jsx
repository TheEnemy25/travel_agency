import styles from './Header.module.scss';
import Select from 'react-select';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const aquaticCreatures = [
    { label: 'USD', value: 'USD', },
    { label: 'EUR', value: 'EUR' },
];

function Header() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <>
            <header className={styles.headerWrapper}>

                <Link className={styles.logo} to="/">TravelAgency</Link>

                <nav className={styles.navLinks}>
                    <ul>
                        <li><Link to='hotel'>Готелі</Link></li>
                        {/* <li><Link to="session">Сеанси</Link></li> */}
                        <li><Link to="store">Магазин</Link></li>
                        <li> <Select
                            options={aquaticCreatures}
                            onChange={setSelectedOption}
                        /></li>
                    </ul>
                </nav>

                <div className={styles.menuLogin}>
                    <ul>
                        <li><Link to="login">Вхід</Link></li>
                        <li><p>|</p></li>
                        <li><Link to="register" > Реєстрація</Link></li>
                    </ul>
                </div>

            </header>
            <Outlet currency={selectedOption} />

            <Footer />
        </>
    )
}

export default Header

// {!isLoggedIn
//     ? <>
//         <li><Link to="login">Вхід</Link></li>
//         <li><p>|</p></li>
//         <li>< Link to="register"> Реєстрація</Link></li>
//     </>
//     : <>Log out</>}