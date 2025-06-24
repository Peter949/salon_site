import styles from './Account.module.css';
import btn_close from '../../../assets/close.png'
import Button from '../../button_f/Button';
import btn_minus from '../../../assets/minus.png'
import btn_plus from '../../../assets/plus.png'
import Input from '../../input_f/Input'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Account = (props) =>
{
    const [isRegistr, setRegistr] = useState(false);
    const [setAccount] = props.methods;
    return(
        <div className={styles.div}>
            <div className={styles.bg}>
                <div className={styles.close}>
                    <img src={btn_close} onClick={() => setAccount(false)}/>
                </div>
                {!isRegistr && <div className={styles.pre_div_sign}>
                    <p className={styles.p_name_sign}>Войти</p>
                    <p className={styles.p_label_sign}>Введите ваш логин и пароль, или <a href="#" onClick={() => setRegistr(true)}>зарегистрируйтесь</a></p>
                    <Input add_style={styles.input_style} placeholder="Логин"/>
                    <Input add_style={styles.input_style} placeholder="Пароль"/>
                    <Button text="Войти" add_style={styles.btn_sign} />
                </div>}
                {isRegistr && <div className={styles.pre_div_auth}>
                        <p className={styles.p_name_auth}>Регистрация</p>
                        <p className={styles.p_label_auth}>Уже зарегистрированы? <a href="#" onClick={() => setRegistr(false)}>Войти</a></p>
                        <div className={styles.pre2_div_auth}>
                            <Input add_style={styles.input_style} placeholder="Логин"/>
                            <Input add_style={styles.input_style} placeholder="Почта"/>
                            <Input add_style={styles.input_style} placeholder="Пароль"/>
                            <Input add_style={styles.input_style} placeholder="Подтверждение пароля"/>
                            <Button text="Войти" add_style={styles.btn_sign}/>
                        </div>
                </div>}
            </div>
        </div>
    )
}

export default Account;