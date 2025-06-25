import ButtonNav from "../ButtonNav/ButtonNav";
import styles from "./Navigator.module.css";
import { useState } from "react";

// константу можно вынести наружу
const btn_name_arr = [
  "Магазин",
  "Парикмахеры",
  "Запись на прием",
  "Все прически",
  "Личный кабинет",
];

const Navigator = (props) => {
  const [setAccount] = props.methods;
  // хуки, пропсы, переменные лучше инициализировать в начале компонента потом уже функции
  const [btn_state, setBtnState] = useState("Магазин"); // начальным значение в данном случае нужно вставить текст а не массив

  const btn_listener = (btn_index) => {
    //switch

    if (btn_index == 4) {
      setAccount(true);
    }
  };

  return (
    <div className={styles.div}>
      {btn_name_arr.map((name, index) => (
        <ButtonNav
          key={index}
          text={name}
          isActive={btn_state === name}
          onClick={() => {
            setBtnState(name);
            btn_listener(index);
          }}
        />
      ))}
    </div>
  );
};

export default Navigator;
