// import React from 'react'
// import logo from '../../assets/images/dumble.png'
// import './Header.css'

// const nav__links = [
//     {
//         path: '#',
//         display: 'Home'
//     },
//     {
//         path: '#schedule',
//         display: 'Schedule'
//     },
//     {
//         path: '#classes',
//         display: 'Classes'
//     },
//     {
//         path: '#pricing-plan',
//         display: 'Pricing'
//     },
//     {
//         path: '#registration',
//         // display: 'Registratio'
//     }
// ]

// function Header() {

//     return (
//         <div>
//             <header className="header">
//                 <div className="container">
//                     {/* Navbar */}
//                     <div className="nav_wrapper">
//                         <div className="logo">
//                             <div className="logo__img">
//                                 <img src={logo} alt="" />
//                             </div>
//                             <h2>FitBody</h2>
//                         </div>

//                         <div className="navigation">
//                             <ul className="menu">
//                                 {
//                                     nav__links.map(item => (
//                                         <li className="nav__item"><a href={item.path}>{item.display}</a></li>
//                                     ))
//                                 }
//                             </ul>
//                         </div>

//                         <div className="nav__right">
//                             <button className="register__btn">Register</button>
//                             <span className="mobile__menu"><i className="ri-menu-line"></i></span>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         </div>
//     )
// }

// export default Header
import React, { useState } from 'react';
import logo from '../../assets/images/dumble.png';
import './Header.css';

const nav__links = [
    {
        path: '#',
        display: 'Home'
    },
    {
        path: '#schedule',
        display: 'Schedule'
    },
    {
        path: '#classes',
        display: 'Classes'
    },
    {
        path: '#pricing-plan',
        display: 'Pricing'
    },
    {
        path: '#registration',
        // display: 'Registration'
    }
];

function Header() {
    const [showRegistration, setShowRegistration] = useState(false);

    const handleRegistrationClick = () => {
        // Set state to show the registration component
        setShowRegistration(true);
        // Scroll to the registration section
        document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <header className="header">
                <div className="container">
                    {/* Navbar */}
                    <div className="nav_wrapper">
                        <div className="logo">
                            <div className="logo__img">
                                <img src={logo} alt="" />
                            </div>
                            <h2>FitBody</h2>
                        </div>

                        <div className="navigation">
                            <ul className="menu">
                                {nav__links.map(item => (
                                    <li className="nav__item" key={item.path}>
                                        <a href={item.path}>{item.display}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="nav__right">
                            <button className="register__btn" onClick={handleRegistrationClick}>Register</button>
                            <span className="mobile__menu"><i className="ri-menu-line"></i></span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
