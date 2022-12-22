import styles from './Main.module.scss';
import Select from 'react-select';
import warszawa from '../../style/images/Warszawa.jpg'
import video from '../../style/images/Swimming.mp4'
import { Slider } from '../Carousel/Slider';
import kyiv from '../../style/images/Kyiv.jpeg'
import tokyo from '../../style/images/Tokyo.jpg'
import madrid from '../../style/images/madrid.jpg'
import paris from '../../style/images/paris.jpg'
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';


const Main = props => {

    const [opt, Setopt] = useState(null)
    console.log(props.selectedOption)





    return (
        <main className={styles.mainWrapper}>
            {/* {console.log(currency)} */}

            <section className={styles.mainVideo}>
                <video src={video} autoPlay loop muted />
            </section>

            <Slider />




            <section className={styles.mainBlocks}>

                <div className={styles.mainBlocksInfo}><img src={madrid} alt="" className={styles.imgs} />
                    <div href='' className={styles.mainBlocksInfoTitle}>
                        <Link to='madrid'>Madrid</Link>
                    </div>
                    <div className={styles.mainBlocksInfoDescription}> Столиця та найбільше місто Іспанії, адміністративний центр автономної спільноти Мадрид. Розташоване в центральній частині Піренейського півострова.
                        <Link to='madrid' className={styles.mainBlocksInfoButton}>Перейти</Link>
                    </div>
                </div>
                <div className={styles.mainBlocksInfo}><img src={paris} alt="" className={styles.imgs} />
                    <div href='' className={styles.mainBlocksInfoTitle}>
                        <Link to='madrid'>Paris</Link>
                    </div>
                    <div className={styles.mainBlocksInfoDescription}> Столиця Франції, адміністративний центр регіону Іль-де-Франс. Окремий департамент Франції. Розташований на річці Сена
                        <Link to='madrid' className={styles.mainBlocksInfoButton}>Перейти</Link>
                    </div>
                </div>
                <div className={styles.mainBlocksInfo}><img src={kyiv} alt="" className={styles.imgs} />
                    <div href='' className={styles.mainBlocksInfoTitle}>
                        <Link to='login'>Kyiv</Link>
                    </div>
                    <div className={styles.mainBlocksInfoDescription}> столиця та найбільше місто України, одне з найбільших і найстаріших міст Європи. Розташований у середній течії Дніпра, у північній Наддніпрянщині.
                        <Link to='madrid' className={styles.mainBlocksInfoButton}>Перейти</Link>
                    </div>
                </div>
                <div className={styles.mainBlocksInfo}><img src={warszawa} alt="" className={styles.imgs} />
                    <div href='' className={styles.mainBlocksInfoTitle}>
                        <Link to='login'>Warsaw</Link>
                    </div>
                    <div className={styles.mainBlocksInfoDescription}>  столиця Польщі з 1596 року, порт на річці Вісла, адміністративний центр Мазовецького воєводства. Місто є місцем розташування центральних органів влади Республіки Польща
                        <Link to='madrid' className={styles.mainBlocksInfoButton}>Перейти</Link>
                    </div>
                </div>
                <div className={styles.mainBlocksInfo}><img src={tokyo} alt="" className={styles.imgs} />
                    <div href='' className={styles.mainBlocksInfoTitle}>
                        <Link to='login'>Tokyo</Link>
                    </div>
                    <div className={styles.mainBlocksInfoDescription}>  столиця Японської Держави, столична префектура в Японії, в регіоні Канто. Розташована в східній частині острова Хонсю, на узбережжі Токійської затоки Тихого океану.
                        <Link to='madrid' className={styles.mainBlocksInfoButton}>Перейти</Link>
                    </div>
                </div>


            </section>

        </main>
    )
}

export default Main