import Button from '../button_f/Button';
import styles from './Navigator.module.css'

const Navigator = () =>
{
    function click(page_name)
    {

        alert(page_name);
    };
    const btn_name_arr = ["Магазин", "Парикмахеры", "Запись на прием", "Все прически", "Личный кабинет"];

    // var btn_arr = [<Button text={btn_name_arr[0]} onClick={click}/>,
    //         <Button text={btn_name_arr[1]} onClick={click}/>,
    //         <Button text={btn_name_arr[2]} onClick={click} />,
    //         <Button text={btn_name_arr[3]} onClick={click}/>,
    //         <Button text={btn_name_arr[4]} onClick={click}/>];

    const btn_arr = btn_name_arr.map((name) => (
        <Button 
            //key={name}
            text={name} 
            onClick={() => click(name)}
        />
    ));

    return(
        <div className={styles.div}>
            {btn_arr}
        </div>
    )
}

export default Navigator;