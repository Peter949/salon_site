import Catalog from "../catalog_f/Catalog";
import Shop from "../pages/shop_f/Shop";
import styles from './Body.module.css'

const Body = (props) =>
{
    return(
        <div className={styles.div}>
            <Shop catalogState={props.states[0]} setCatalog={props.methods[0]}/>
        </div>
    )
}

export default Body;