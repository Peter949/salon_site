import Button from '../../button_f/Button';
import styles from './Shop.module.css'

function Shop()
{
    const btn_add = <Button text='В корзину' add_style={styles.btn_style}/>;
    
    return(
        <div className={styles.div}>
            <div className={styles.products}>
                <div className={styles.product}>
                    НАЗВАНИЕ / ЦЕНА /
                    {btn_add}
                </div>
                <div className={styles.product}>
                    НАЗВАНИЕ / ЦЕНА /
                    {btn_add}
                </div>
                <div className={styles.product}>
                    НАЗВАНИЕ / ЦЕНА /
                    {btn_add}
                </div>
            </div>
            <div className={styles.wish_list}>

            </div>
        </div>
    )
}

export default Shop;