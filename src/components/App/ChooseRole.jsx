import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const DeployerOrAttacher = () => {
    const { selectTrader, selectOffTaker } = useReach();

    return (
        <div className={ useClasses(styles.subContainer) }>
            <h2 className={ useClasses() }>Please select a role</h2>
            <div className={ useClasses(styles.orderContainer) }>
                <button onClick={ () => selectTrader() } className={ useClasses(styles.actionButton) } title="Set the property information, deploy the contract">Trader</button>
                <span className={ useClasses(styles.littleText) }>Set the property information, deploy the contract</span>
            </div>
            <div className={ useClasses(styles.orderContainer) }>
                <button onClick={ () => selectOffTaker() } className={ useClasses(styles.actionButton) } title="Attach to the Trader's contract">OffTaker</button>
                <span className={ useClasses(styles.littleText) }>Attach to the Trader's contract</span>
            </div>
        </div>
    );
};

export default DeployerOrAttacher;