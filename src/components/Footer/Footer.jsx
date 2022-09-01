import React from 'react';
import footerImagte from './img/details.jpg';
import s from './scss/style.module.scss';
import logo from './../../assets/react.svg'

function Footer(props) {
    const footer = {
        backgroundImage: `url(${footerImagte})`,
    }
    return (
        <footer className={s['footer']} style={footer}>
            <div className={s['footer-container']}>
                <a href="/" className={s['footer-logo']}><img src={logo} alt="Logo"/> React App</a>
                <div className={s['footer-lists']}>
                    <ul className={s['footer-nav']}>
                        <li className={s['footer-item']}>Home</li>
                        <li className={s['footer-item']}>Production</li>
                        <li className={s['footer-item']}>About</li>
                        <li className={s['footer-item']}>Services</li>
                        <li className={s['footer-item']}>Contact</li>
                    </ul>
                    <ul className={s['footer-list']}>
                        <h5>Socials</h5>
                        <li className={s['footer-item']}>Facebook</li>
                        <li className={s['footer-item']}>Twitter</li>
                        <li className={s['footer-item']}>Instagram</li>
                        <li className={s['footer-item']}>Youtube</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;