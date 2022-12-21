import styles from '../Madrid/Madrid.module.scss';

export const Madrid = () => {
    return (
        <main className={styles.mainSite}>
            <section className={styles.mainSiteDescription}>
                <a name="description"><h1>Опис</h1></a>
                <div className={styles.mainSiteSectionOne}>
                    <div style={{ width: '66%' }}>
                        Мадри́д (ісп. Madrid) — столиця та найбільше місто Іспанії, адміністративний центр автономної спільноти Мадрид. Розташоване в центральній частині Піренейського півострова. Великий Мадрид є найбільшою міською агломерацією Південної Європи та займає агломерацію площею 1,2 тисячі км². Безпосередньо місто розташоване на території завбільшки 607 км² та включає 21 адміністративний район. Головна окраса столиці — Мадридський собор. Населення міста — 3 273 049 мешканців (2010 рік), а включаючи передмістя — понад 7 млн.
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <a href="#description">Опис</a>
                        <a href="#map">Мапа</a>
                        <a href="#imgs">Пейзаж</a>
                    </div>

                </div>

            </section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d194347.4782999014!2d-3.8443433!3d40.4380986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2z0JzQsNC00YDQuNC0LCBNYWRyaWQsINCG0YHQv9Cw0L3RltGP!5e0!3m2!1suk!2sua!4v1671566417007!5m2!1suk!2sua" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </main>
    )
}