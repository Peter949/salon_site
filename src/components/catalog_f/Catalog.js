import styles from './Catalog.module.css';
import btn_close from '../../assets/close.png'
import Button from '../button_f/Button';
import { useEffect, useState } from 'react';

const Catalog = (props) =>
{
    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data => {
            setCategories(data)
        });
    }, [])

    
    return(
        <div className={styles.div}>
            <div className={styles.bg}>
                <div className={styles.close}>
                    <img src={btn_close} onClick={() => props.method(false)}/>
                </div>
                <p className={styles.p_name}>Каталог товаров</p>
                <div className={styles.list}>
                    {categories.map(item => (
                        <Button text={item.name} add_style={styles.btn_style}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Catalog;