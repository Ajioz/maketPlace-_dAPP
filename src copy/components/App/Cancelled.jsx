import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const Cancelled = () => {
    const { role } = useReach();
    return (
        <div className={ useClasses(styles.subContainer) }>
            {role === 'OffTaker' ? 'You' : 'The OffTaker' } just cancelled the transaction...
        </div>
    );
};

export default Cancelled;