import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const Paid = () => {
    const { amountPaid, standardUnit, role } = useReach();
    return (
        <div className={ useClasses(styles.subContainer) }>
            { role === 'OffTaker' ? 'You' : 'The OffTaker' } just paid { amountPaid } { standardUnit } to the contract.
        </div>
    );
};

export default Paid;