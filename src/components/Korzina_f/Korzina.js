import styles from './Korzina.module.css';
import btn_close from '../../assets/close.png'
import Button from '../button_f/Button';
import btn_minus from '../../assets/minus.png'
import btn_plus from '../../assets/plus.png'
import { useEffect, useState } from 'react';

const Korzina = (props) =>
{

    const [setKorzina, updateKorzina] = props.methods;
    const [db_korzina, set_db_korzina] = useState([]);

    const deleteFromKorzina = (product_id) =>
    {
        let newKorzina = [...props.korzina];

        for(let i = 0; i < newKorzina.length; i++)
        {
            if(newKorzina[i] == product_id)
            {
                newKorzina.splice(i, 1);
                updateKorzina(newKorzina);
                break;
            }
        }

    }
    const addFromKorzina = (product_id) =>
    {
        let newKorzina = [...props.korzina];
        newKorzina.push(product_id);
        updateKorzina(newKorzina);

    }

    useEffect(() =>
    {
        const countMap = props.korzina.reduce((acc, num) => {
            acc[num] = (acc[num] || 0) + 1; 
            return acc;
        }, {});
        const countedItems = Object.entries(countMap).map(([value, count]) => ({
            id: value,
            quantity: count,
        }))
        if(props.korzina.length > 0)
        {
            fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                userId: 1,
                products: countedItems.map(
                    item => ({
                        id: item.id,
                        quantity: item.quantity,
                    })
                )
            })
            })
            .then(res => res.json())
            .then(data => {
                set_db_korzina(data.products);
            })
        }
        
    }, [props.korzina])

    // useEffect(() => {
    //     fetch('https://dummyjson.com/carts/user/1')
    //     .then(res => res.json())
    //     .then( data => {

    //         console.log(data);
    //     });
    // })
    
    //console.log(db_korzina);
    

    return(
        <div className={styles.div}>
            <div className={styles.bg}>
                <div className={styles.close}>
                    <img src={btn_close} onClick={() => setKorzina(false)}/>
                </div>
                <p className={styles.p_name}>Корзина</p>
                <div className={styles.list}>
                    {(props.korzina.length != 0) && (db_korzina.map((item) => (
                        <div className={styles.pre_product}>
                            <div className={styles.product}>
                                <p className={styles.p_item}>{item.title}</p>
                                <p className={styles.p_item}>{item.quantity}</p>
                                <p className={styles.p_item}>${item.total}</p>
                            </div>
                            <div className={styles.pre_btn_ch}>
                                <img src={btn_minus} className={styles.btn_ch} onClick={() => deleteFromKorzina(item.id)}/>
                                <img src={btn_plus} className={styles.btn_ch} onClick={() => addFromKorzina(item.id)}/>
                            </div>
                        </div>
                    )))}
                </div>
                <Button text='Купить' add_style={styles.btn_style_buy}/>
            </div>
        </div>
    )
}

export default Korzina;