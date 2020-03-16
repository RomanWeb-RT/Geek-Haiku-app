import React from 'react';
import styles from './SandGrain.css';

const SandGrain = props => {
    return (
        <div className={styles.SandGrain} style={{background: `url(${props.image})`}}/>
    )
};

export default SandGrain;