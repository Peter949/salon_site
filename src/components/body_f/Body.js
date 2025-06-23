import Catalog from "../catalog_f/Catalog";
import Shop from "../pages/shop_f/Shop";
import styles from './Body.module.css'

const Body = (props) =>
{
    return(
        <div className={styles.div}>
            <Shop catalogState={props.states[0]} setCatalog={props.methods[0]}
            catalogStateShop={props.states[1]} catalogProducts={props.states[2]}
            setStateShop={props.methods[1]}
            />
        </div>
    )
}

export default Body;