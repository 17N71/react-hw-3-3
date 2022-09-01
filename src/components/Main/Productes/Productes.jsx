import React from 'react';
import s from './scss/style.module.scss';
import Product from "./Product/Product.jsx";

//image start
import ducati from './Product/img/ducati.png'
import harley from './Product/img/harley.jpg'
import bmw from './Product/img/bmw.webp'
import yamaha from './Product/img/yamaha.jpg'
import kawasaki from './Product/img/kawasaki.jpg'
import indian from './Product/img/indian.webp'
//image end
function Productes(props) {
    return (<>
        <div className={s['productes']}>
        <h3 className={s['productes-title']}>New productes</h3>
            <div className={s["productes-container"]}>
                <Product price={2999} id={1} image={ducati}  name={"Ducati"} />
                <Product price={3999} id={2} image={harley} name={'Harley'}/>
                <Product price={6999} id={3} image={bmw} name={'Bmw'}/>
                <Product price={7999} id={4} image={yamaha} name={'Yamaha'}/>
                <Product price={1999} id={5} image={kawasaki} name={'Kawasaki'}/>
                <Product price={2999} id={6} image={indian} name={'Indian'}/>
            </div>
        </div>
        </>
    );
}

export default Productes;