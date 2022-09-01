import React from "react";
import { useReach, useClasses } from "../../hooks";
import styles from "../../styles/Global.module.css";

const SetPropertyInfo = () => {
    const { propertyInfo, setPropertyInfo, standardUnit, setProperty } = useReach();
    const handleChange = e => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setPropertyInfo(propertyInfo => ({ ...propertyInfo, [name]: value }));
    };
    return (
        <div className={ useClasses(styles.subContainer) }>
            <h2 className={ useClasses() }> What do you trade on? </h2>
            <span className={ useClasses(styles.littleText) }>Property Name</span>
            <input
                className={ useClasses(styles.fields) }
                type="text"
                name='property'
                placeholder='Three bedroom duplex.'
                onChange={ handleChange }
                autoFocus
            />
            <span className={ useClasses(styles.littleText) }>Price in { standardUnit }</span>
            <input
                className={ useClasses(styles.fields) }
                type="number"
                name='price'
                placeholder='100'
                onChange={ handleChange }
            />
            <button className={ useClasses(styles.actionButton) } onClick={ () => {
                setProperty(propertyInfo.property, propertyInfo.price);
            } }>Set Property Information</button>
        </div>
    );
};

export default SetPropertyInfo;