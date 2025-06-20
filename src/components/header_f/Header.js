import styles from './Header.module.css'
import scissorsImg from '../../assets/scissors.png'

const Header = () =>
{
    return(
        <div className={styles.div}>
            <img className={styles.img} src={scissorsImg} alt="Изображение-ножницы"/>
            <p className={styles.p}>
                ПАРИКМАХЕРСКАЯ
            </p>
            <img className={styles.img} src={scissorsImg} alt="Изображение-ножницы"/>
        </div>
    )
}

export default Header;