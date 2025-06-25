import styles from './Account.module.css';
import btn_close from '../../../assets/close.png'
import Button from '../../button_f/Button';
import btn_minus from '../../../assets/minus.png'
import btn_plus from '../../../assets/plus.png'
import Input from '../../input_f/Input'
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Account = (props) =>
{
    const [isRegistr, setRegistr] = useState(false);
    const [setAccount] = props.methods;
    const loginRef = useRef(null);
    const passwordRef = useRef(null);

    const emailRef = useRef(null);
    const passwordCheckRef = useRef(null);

    const submitSign = () => {
        if(passwordRef.current.value != "" && loginRef.current.value != "")
        {
            fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: loginRef.current.value,
                password: passwordRef.current.value,
            }),
            })
            .then(res => res.json())
            .then(data => 
            {
                if(data.accessToken != null)
                {
                    alert("Вы вошли!");
                    setAccount(false);
                }
                else
                {
                    alert("Не правильный пароль или логин!");
                }
            });
        }
        else
        {
            alert("Поля не должны быть пустыми!");
        }
    };
    
    const submitAuth = () =>
    {
        if(passwordRef.current.value != "" && emailRef.current.value != "" && loginRef.current.value != "")
        {
            if(passwordRef.current.value == passwordCheckRef.current.value)
            {
                fetch('https://dummyjson.com/users/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: loginRef.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                })
                })
                .then(res => res.json())
                .then(data =>
                {
                    alert("Вы зарегистрированы");
                    setRegistr(false);
                });
            }
            else
            {
                alert("Пароли не совпадают!");
            }
        }
        else
        {
            alert("Поля не должны быть пустыми!");
        }
    }


    return(
        <div className={styles.div}>
            <div className={styles.bg}>
                <div className={styles.close}>
                    <img src={btn_close} onClick={() => setAccount(false)}/>
                </div>
                {!isRegistr && <form className={styles.pre_div_sign} onSubmit={submitSign}>
                    <p className={styles.p_name_sign}>Войти</p>
                    <p className={styles.p_label_sign}>Введите ваш логин и пароль, или <a href="#" onClick={() => setRegistr(true)}>зарегистрируйтесь</a></p>
                    <Input add_style={styles.input_style} placeholder="Логин" ref={loginRef}/>
                    <Input add_style={styles.input_style} type="password" placeholder="Пароль" ref={passwordRef}/>
                    <Button type="submit" text="Войти" add_style={styles.btn_sign} />
                </form>}
                {isRegistr && <form className={styles.pre_div_auth} onSubmit={submitAuth}>
                        <p className={styles.p_name_auth}>Регистрация</p>
                        <p className={styles.p_label_auth}>Уже зарегистрированы? <a href="#" onClick={() => setRegistr(false)}>Войти</a></p>
                        <div className={styles.pre2_div_auth}>
                            <Input add_style={styles.input_style} placeholder="Логин" ref={loginRef}/>
                            <Input add_style={styles.input_style} type="email" placeholder="Почта" ref={emailRef}/>
                            <Input add_style={styles.input_style} type="password" placeholder="Пароль" ref={passwordRef}/>
                            <Input add_style={styles.input_style} type="password" placeholder="Подтверждение пароля" ref={passwordCheckRef}/>
                            <Button type="submit" text="Войти" add_style={styles.btn_sign}/>
                        </div>
                </form>}
            </div>
        </div>
    )
}

export default Account;