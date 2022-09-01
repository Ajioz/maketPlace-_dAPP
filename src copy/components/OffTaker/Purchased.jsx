import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const Purchased = () => {
    const { product } = useReach();
    return (
        <div className={ useClasses(styles.subContainer) }>
            <h2 className={ useClasses() }>Congrats you now have ownership of { product }!</h2>
        </div>
    );
};

export default Purchased;