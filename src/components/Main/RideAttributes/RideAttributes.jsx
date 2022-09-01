import React from 'react';
import parts from './img/parts.jpg'
import helmets from './img/helmet.png'
import s from './scss/style.module.scss';
function RideAttributes() {
    return (
        <div className={s['rideAttributes']}>
            <div className={s['rideAttributes-container']}>
                <div className={s['rideAttributes-item']}><img src={helmets} alt="Helmets"/><span>Helmets</span></div>
                <div className={s['rideAttributes-item']}><img src={parts} alt="Parts"/><span>Parts</span></div>
            </div>
        </div>
    );
}

export default RideAttributes;