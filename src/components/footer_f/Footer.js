import styles from './Footer.module.css'

const Footer = () =>
{
    return(
        <div className={styles.div}>
            <p className={styles.p}>О нас</p>
            <p className={styles.p}>FAQ</p>
        </div>
    )
}

export default Footer;