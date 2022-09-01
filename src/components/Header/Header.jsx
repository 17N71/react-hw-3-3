import React, {useState} from 'react';
import s from './scss/style.module.scss'
import logo from './../../assets/react.svg'
import headerImage from './img/bike-header.jpg'
function Header() {
    const [active,setActive] = useState("home")
    const Image = {
        backgroundImage: `url(${headerImage})`
    }
    const activeTitle = active.charAt(0).toUpperCase()  + active.slice(1)
    return (
        <header className={s['header']}>
            <div className={s['header-header']} style={Image}><h1 className={s['header-title']}>MotorCycle</h1></div>
            <div className={s['header-footer']}>
                <div className={s["header-footer_forward"]}>
                    <a href={'/'} className={s["header-logo"]}><img src={logo} alt="Logo" /></a>
                    <div className={s["header-page_state"]}>React - {activeTitle}</div>
                </div>
                <nav className={s["header-footer_backward"]}>
                    <ul className={s["header-footer_list"]}>
                        <li className={s["header-item"]}><a className={`${s['header-link']}  ${ active == "home"? s['active'] : ""}`} onClick={()=>setActive('home')}>Home</a></li>
                        <li className={s["header-item"]}><a className={`${s['header-link']}  ${ active == "products"? s['active'] : ""}`}  onClick={()=>setActive('products')}>Products</a></li>
                        <li className={s["header-item"]}><a className={`${s['header-link']}  ${ active == "contact"? s['active'] : ""}`} onClick={()=>setActive('contact')}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;