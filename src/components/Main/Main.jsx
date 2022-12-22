import styles from './Main.module.scss';
import Select from 'react-select';
import japan from '../../style/images/japan.jfif'
import spain from '../../style/images/spain.jpg'
import video from '../../style/images/Swimming.mp4'
import { Slider } from '../Carousel/Slider';
import ital from '../../style/images/Italy.jpg'
import ukraine from '../../style/images/ukraine.jpg'
import madrid from '../../style/images/madrid.jpg'
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


                        {/* <div>{props.selectedOption ? props.selectedOption.value : 'loh'}</div> */}


                        <Link to='madrid' className={styles.mainBlocksInfoButton}>Перейти</Link>
                    </div>
                </div>
                <div className={styles.mainBlocksInfo}><img src={ital} alt="" className={styles.imgs} />
                    <div href='' className={styles.mainBlocksInfoTitle}>
                        <Link to='login'>Italy</Link>
                    </div>

                </div>
                <div className={styles.mainBlocksInfo}><img src={spain} alt="" className={styles.imgs} />
                    <div href='' className={styles.mainBlocksInfoTitle}>
                        <Link to='login'>Spain</Link>
                    </div>

                </div>
                <div className={styles.mainBlocksInfo}><img src={ukraine} alt="" className={styles.imgs} />
                    <div href='' className={styles.mainBlocksInfoTitle}>
                        <Link to='login'>Ukraine</Link>
                    </div>

                </div>
                <div className={styles.mainBlocksInfo}><img src={japan} alt="" className={styles.imgs} />
                    <div href='' className={styles.mainBlocksInfoTitle}>
                        <Link to='login'>Japan</Link>
                    </div>
                </div>


            </section>

        </main>
    )
}

export default Main