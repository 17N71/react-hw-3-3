import React, {useState} from 'react';
import s from './scss/style.module.scss';

function Product({price, image, name, id}) {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(!open)
    }

    return (
        <div className={s['product-card']}>
            <div className={s['product-image']}><img src={image} alt={name} title={name}/></div>
            <h3 className={s['product-title']}>{name}</h3>
            <h4 className={s['product-id']}>Motorcycle {id}</h4>
            <div className={s['product-price']}>${price}</div>
            <div className={`${s['product-desctription']} ${open ? s['opened'] : ''}`}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet deleniti distinctio dolore explicabo,
                <p>libero, nesciunt omnis provident quis quod sed sit suscipit ut! Debitis deleniti doloremque eius iure</p>
                nesciunt odit omnis provident quod vel vero. Enim excepturi hic ipsam nihil possimus, quaerat
                repellendus sit?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet deleniti distinctio dolore explicabo,
                <p>libero, nesciunt omnis provident quis quod sed sit suscipit ut! Debitis deleniti doloremque eius iure</p>
                nesciunt odit omnis provident quod vel vero. Enim excepturi hic ipsam nihil possimus, quaerat
                repellendus sit?

            </div>
            <button type='button' className={s['btn-rm']} onClick={handleOpen}>Read More</button>
        </div>
    );
}

export default Product;