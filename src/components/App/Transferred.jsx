import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const Transferred = () => {
    const { amountPaid, standardUnit, role } = useReach();
    return (
        <div className={ useClasses(styles.subContainer) }>
            The contract paid { amountPaid } { standardUnit } to { role === 'Trader' ? 'You' : 'The Trader' }.
        </div>
    );
};

export default Transferred;