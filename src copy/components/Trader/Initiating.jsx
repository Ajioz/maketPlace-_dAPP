import React from "react";
import { useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const Initiating = () => {
    return (
        <div className={ useClasses(styles.subContainer) }>
            Initiating Contract Operations...
        </div>
    );
};

export default Initiating;