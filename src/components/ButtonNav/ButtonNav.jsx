// стили рекомендуется размещать ближе к сущности которую они стилизируют
// в данном случае модульные стили отвечают за кнопку-компонент ButtonNav
import styles from "./ButtonNav.module.css";

const ButtonNav = ({ onClick, text, isActive = null }) => {
  return (
    <button
      className={[
        styles.button,
        styles.button_bg_default,
        isActive ? styles.button_active : "",
      ]
        .join(" ")
        .trim()}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonNav;
