import React from 'react';
import styles from './BarGauche.module.scss'

const BarGauche = () => {

    
    return (
        <div className={styles.barGauche}>
            <h1 className={styles.titre}>DockNotes</h1>
            <div className={styles.buttons}>
                <button className={styles.blue}></button>
                <button className={styles.orange}></button>
                <button className={styles.red}></button>
                <button className={styles.green}></button>
                <button className={styles.purple}></button>
            </div>
        </div>
    );
};

export default BarGauche;