import React from 'react'
import './start.css'
import trainerImg from '../../assets/images/trainer.png'

function Start() {
    return (
        <div>
            <section id='classes'>
            <div className="container">
                <div className="start__wrapper">
                    <div className="start__img">
                        <img src={trainerImg} alt="" />
                    </div>

                    <div className="start__content">
                        <h2 className="section__title">
                            Ready to make a <span className="highlights">change?</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos cumque quas ut hic natus exercitationem impedit veritatis provident molestiae? Libero voluptatum mollitia explicabo? Ipsam, aperiam! Dolores omnis numquam molestias quidem!</p>
                        <button className="register__btn">Get Started</button>
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Start
