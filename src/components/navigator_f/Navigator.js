import Button from '../button_f/Button';
import styles from './Navigator.module.css'
import { useState } from 'react';

const Navigator = () =>
{
    const btn_name_arr = ["Магазин", "Парикмахеры", "Запись на прием", "Все прически", "Личный кабинет"];
    const [btn_state, setBtnState] = useState(['Магазин']);

    const btn_styles = [styles.btn_style, styles.btn_style, styles.btn_style, styles.btn_style, styles.btn_style];

    switch(btn_state)
    {
        case btn_name_arr[0]:
            btn_styles[0] = styles.active_btn_style;
            break;
        case btn_name_arr[1]:
            btn_styles[1] = styles.active_btn_style;
            break;
        case btn_name_arr[2]:
            btn_styles[2] = styles.active_btn_style;
            break;
        case btn_name_arr[3]:
            btn_styles[3] = styles.active_btn_style;
            break;
        case btn_name_arr[4]:
            btn_styles[4] = styles.active_btn_style;
            break;
    }
    
    const btn_arr = btn_name_arr.map((name, index) => (
        <Button 
            //key={name} 
            text={name} 
            add_style = {btn_styles[index]}
            onClick={() => setBtnState(name)}
        />
    ));

    return(
        <div className={styles.div}>
            {btn_arr}
        </div>
    )
}

export default Navigator;