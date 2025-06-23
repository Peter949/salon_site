import Button from '../../button_f/Button';
import Catalog from '../../catalog_f/Catalog';
import styles from './Shop.module.css'
import { useEffect, useState } from 'react'

const Shop = (props) =>
{
    
    
    const btn_add = <Button text='В корзину' add_style={styles.btn_add}/>;
    const btn_korzina = <Button text='Корзина' add_style={styles.btn_korzina}/>;
    const btn_catalog_non = <Button text='...' add_style={styles.btn_catalog} 
    onClick={() => props.setCatalog(true)}/>;

    const btn_catalog_active = <Button text='Отменить' add_style={styles.btn_catalog} 
    onClick={() => props.setStateShop(false)}/>;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if(props.catalogStateShop)
        {
            setProducts(props.catalogProducts);
        }
        else
        {
            fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
            });
        }
    }, [props.catalogStateShop])
    
    


    return(
        <div className={styles.div}>
            <div className={styles.products}>
                {products.map(item => (
                    <div>
                        <div className={styles.product} key={item.id

                        }>
                            {/* <img src={item.images} className={styles.img}/> */}
                            {<img src={item.thumbnail} className={styles.img}/>}
                            {item.image} <p className={styles.p_product}>{item.title} | ${item.price}</p>
                            {btn_add}
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.wish_list}>
                {btn_korzina}
                <p className={styles.p_catalog}>Каталог</p>
                {props.catalogStateShop && (btn_catalog_active)}
                {!props.catalogStateShop && (btn_catalog_non)}
            </div>
        </div>
    )
}

export default Shop;