import Button from '../../button_f/Button';
import styles from './Shop.module.css'
import { useState } from 'react'

const Shop = () =>
{
    const btn_add = <Button text='В корзину' add_style={styles.btn_add}/>;
    const btn_korzina = <Button text='Корзина' add_style={styles.btn_korzina}/>;
    const btn_catalog = <Button text='...' add_style={styles.btn_catalog}/>;

    const [products, setProducts] = useState([]);

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
        setProducts(data.products)
        console.log(data.products)
    });



    return(
        <div className={styles.div}>
            <div className={styles.products}>


            {products.map(item => (
                <div className={styles.product} key={item.id}>
                    <img src={item.images} className={styles.img}/>
                    {item.image} <p className={styles.p_product}>{item.title} | ${item.price}</p>
                    {btn_add}
                </div>
            ))}


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