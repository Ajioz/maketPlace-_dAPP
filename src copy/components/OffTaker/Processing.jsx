import React from "react";
import { useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const WaitingForTurn = () => {
    return (
        <div className={ useClasses(styles.subContainer) }>
            <h2 className={ useClasses() }>Processing Response...</h2>
        </div>
    );
};

export default WaitingForTurn;