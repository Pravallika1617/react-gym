import React from 'react'
import './Footer.css'
import logo from '../../assets/images/dumble.png'

function Footer() {

    const year = new Date().getFullYear();

    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__box">
                            <div className="logo">
                                <div className="logo__img">
                                    <img src={logo} alt="" />
                                </div>
                                <h2>FitBody</h2>
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, libero nam labore ullam nemo deleniti!</p>
                        </div>
                        <div className="footer__box">
                            <h2 className="footer__title">Company</h2>
                            <ul className="footer__links">
                                <li><a href="#">Our program</a></li>
                                <li><a href="#">Our plan</a></li>
                                <li><a href="#">Become a member</a></li>
                            </ul>
                        </div>

                        <div className="footer__box">
                            <h2 className="footer__title">Quick Links</h2>
                            <ul className="footer__links">
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <p className='copyright'>Copyrights - {year} @ All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
