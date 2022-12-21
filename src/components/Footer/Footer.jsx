import styles from './Footer.module.scss';
import Select from 'react-select';
import Youtube from '../../style/images/youtube.svg'
import Instagram from '../../style/images/instagram.svg'
import Twitter from '../../style/images/twitter.svg'


function Footer() {
    return (
        <footer className={styles.footerWrapper}>

            <div className={styles.footerBlockOne}>
                <div className={styles.footerBlockTwo}>
                    <div>
                        <div className={styles.footerdis}>Контакти</div>
                        <ul>
                            <li><a href="#">Служба підтримки клієнтів</a></li>
                            <li><a href="Shop.html">Гарантія обслуговування</a></li>
                            <li><a href="Shop.html">Відгук на сайт</a></li>
                        </ul>
                        <img src={Youtube} height="40" width="40" />
                        <img src={Instagram} height="40" width="40" />
                        <img src={Twitter} height="40" width="40" />
                    </div>
                </div>

                <div className={styles.footerBlockTwo}>
                    <div>
                        <div className={styles.footerdis}>Про нас</div>
                        <ul>
                            <li><a href="FilmMenu.html">Про TravelAgency</a></li>
                            <li><a href="#">Вакансії</a></li>
                            <li><a href="Shop.html">Умови та положення</a></li>
                            <li><a href="Shop.html">Положення про конфіденційність</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBlockTwo}>
                    <div>
                        <div className={styles.footerdis}>Інші послуги</div>
                        <ul>
                            <li><a href="FilmMenu.html">Відносини з інвесторами</a></li>
                            <li><a href="#">Партнерська програма</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}



export default Footer