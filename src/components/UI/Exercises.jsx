import React from 'react'
import './Exercises.css'
import lunges from '../../assets/images/lunges.png'
import yoga from '../../assets/images/yoga-pose.png'
import extended from '../../assets/images/extended.png'


function Exercises() {
    return (
        <div>
            <section id='schedule'>
                <div className="container excercise__container">
                    <div className="excercise__top">
                        <h2 className="section__title">
                            Benefits of <span className="highlights">Excercises</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui optio,<br /> dolor accusamus harum officia ab!</p>
                    </div>

                    <div className="exercise__wrapper">
                        <div className="exercise__item">
                            <span className="exercise__icon">
                                <img src={lunges} alt="" />
                            </span>

                            <div className="exercise__content">
                                <h4>Healthy life</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>

                        <div className="exercise__item">
                            <span className="exercise__icon">
                                <img src={yoga} alt="" />
                            </span>

                            <div className="exercise__content">
                                <h4>Increasing Flexibility</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>

                        <div className="exercise__item">
                            <span className="exercise__icon">
                                <img src={extended} alt="" />
                            </span>

                            <div className="exercise__content">
                                <h4>Reducing Blood Pressure</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Exercises
