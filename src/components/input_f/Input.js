import styles from './Input.module.css'

const Input = (props) =>
{

    return (
        <input className={`${styles.input} ${props.add_style}`} placeholder={props.placeholder}/>
    )
}

export default Input;
