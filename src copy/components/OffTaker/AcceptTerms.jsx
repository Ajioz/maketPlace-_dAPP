import React, { useState } from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const AcceptTerms = () => {
    const [disabled, setDisabled] = useState(false);
    const { propertyInfo, standardUnit, decide } = useReach();

    return (
        <div className={ useClasses(styles.subContainer) }>
            <h2 className={ useClasses(styles.widthMax) }> Are you interested in purchasing this item? </h2>
            <h3 className={ useClasses(styles.widthMax) }> Property to be sold: { propertyInfo.property }</h3>
            <h3 className={ useClasses(styles.widthMax) }> Price to be sold at: { propertyInfo.price } { standardUnit }</h3>
            <div className={ useClasses(styles.subContainer) }>
                <button
                    className={ useClasses(styles.actionButton) }
                    disabled={ disabled }
                    onClick={ () => {
                        setDisabled(true);
                        decide(true);
                    } }>
                    Yes
                </button>
                <button
                    className={ useClasses(styles.actionButton) }
                    disabled={ disabled }
                    onClick={ () => {
                        setDisabled(true);
                        decide(false);
                    } }>
                    No
                </button>
            </div>
        </div>
    );
};

export default AcceptTerms;