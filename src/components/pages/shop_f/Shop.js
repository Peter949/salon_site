import Button from '../../button_f/Button';
import styles from './Shop.module.css'
import { useState, useEffect } from 'react'

const Shop = () =>
{
    const btn_add = <Button text='В корзину' add_style={styles.btn_add}/>;
    const btn_korzina = <Button text='Корзина' add_style={styles.btn_korzina}/>;
    const btn_catalog = <Button text='...' add_style={styles.btn_catalog}/>;

    

    return(
        <div className={styles.div}>
            <div className={styles.products}>




                 <div className={styles.product}>
                    НАЗВАНИЕ / ЦЕНА /
                    {btn_add}
                </div>


            </div>
            <div className={styles.wish_list}>
                {btn_korzina}
                <p className={styles.p_catalog}>Каталог</p>
                {btn_catalog}
            </div>
        </div>
    )
}

export default Shop;