// import React, { useState } from 'react';
// import heroImg from '../../assets/images/gym-02.png';
// import dumbleIcon from '../../assets/images/dumble.png';
// import video from '../../assets/images/video.mp4';
// import './Hero.css';

// function Hero() {
//     const [showVideo, setShowVideo] = useState(false);
//     const [videoEnded, setVideoEnded] = useState(false);

//     const handlePlayVideo = () => {
//         setShowVideo(true);
//     };

//     const handleVideoEnded = () => {
//         setVideoEnded(true);
//     };

//     return (
//         <div>
//             <section>
//                 <div className="container">
//                     {!showVideo && (
//                         <div className="hero__wrapper">
//                             <div className="hero__content">
//                                 <h2 className='section__title'>Exercise is the key to a
//                                     <span className="highlights"> Healthy</span> Lifestyle
//                                 </h2>
//                                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, <br />doloribus labore illo vel quis asperiores. </p>

//                                 <div className="hero__btns">
//                                     <button className="register__btn">Get Started</button>
//                                     <button className="watch__btn" onClick={handlePlayVideo}>
//                                         <span><i className="ri-play-fill"></i></span>Watch Video
//                                     </button>
//                                 </div>
//                             </div>

//                             <div className="hero__img">
//                             <div className="hero__img-wrapper">
//                                 <div className="box-01">
//                                     <div className="box-02">
//                                         <div className="box-03">
//                                             <div className="box__img">
//                                                 <img src={heroImg} alt="" />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="heart__rate">
//                                     <h5>Heart Rate</h5>
//                                     <span><i className="ri-heart-pulse-fill"></i></span>
//                                     <h5>2567 BPM</h5>
//                                 </div>

//                                 <div className="gym__location">
//                                     <span><i className="ri-map-pin-2-fill"></i></span>
//                                     <h5>Find a new gym near you</h5>
//                                 </div>

//                                 <div className="dumble__icon">
//                                     <img src={dumbleIcon} alt="" />
//                                 </div>
//                             </div>
//                         </div>
//                         </div>
//                     )}

//                     {showVideo && !videoEnded && (
//                         <div className="hero__video-container">
//                             <video src={video} autoPlay controls onEnded={handleVideoEnded}></video>
//                         </div>
//                     )}

//                     {showVideo && videoEnded && (
//                         <div className="hero__wrapper">
//                             <div className="hero__content">
//                                 <h2 className='section__title'>Exercise is the key to a
//                                     <span className="highlights"> Healthy</span> Lifestyle
//                                 </h2>
//                                 <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, <br />doloribus labore illo vel quis asperiores. </p>

//                                 <div className="hero__btns">
//                                     <button className="register__btn">Get Started</button>
//                                     <button className="watch__btn" onClick={handlePlayVideo}>
//                                         <span><i className="ri-play-fill"></i></span>Watch Video
//                                     </button>
//                                 </div>
//                             </div>

//                             <div className="hero__img">
//                                 <div className="hero__img-wrapper">
//                                     <div className="box-01">
//                                         <div className="box-02">
//                                             <div className="box-03">
//                                                 <div className="box__img">
//                                                     <img src={heroImg} alt="" />
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                     <div className="heart__rate">
//                                         <h5>Heart Rate</h5>
//                                         <span><i className="ri-heart-pulse-fill"></i></span>
//                                         <h5>2567 BPM</h5>
//                                     </div>

//                                     <div className="gym__location">
//                                         <span><i className="ri-map-pin-2-fill"></i></span>
//                                         <h5>Find a new gym near you</h5>
//                                     </div>

//                                     <div className="dumble__icon">
//                                         <img src={dumbleIcon} alt="" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Hero;

import React, { useState, useRef } from 'react';
import heroImg from '../../assets/images/gym-02.png';
import dumbleIcon from '../../assets/images/dumble.png';
import video from '../../assets/images/video.mp4';
import './Hero.css';

function Hero() {
    const [showVideo, setShowVideo] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);
    const registrationRef = useRef(null); // Create a ref for the registration component

    const handlePlayVideo = () => {
        setShowVideo(true);
    };

    const handleVideoEnded = () => {
        setVideoEnded(true);
    };

    const handleGetStarted = () => {
        setShowVideo(false); // Hide video if it's currently shown
        setVideoEnded(false); // Reset video ended state
        registrationRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the registration component
    };

    return (
        <div>
            <section>
                <div className="container">
                    {!showVideo && (
                        <div className="hero__wrapper">
                            <div className="hero__content">
                                <h2 className='section__title'>Exercise is the key to a
                                    <span className="highlights"> Healthy</span> Lifestyle
                                </h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, <br />doloribus labore illo vel quis asperiores. </p>

                                <div className="hero__btns">
                                    <button className="register__btn" onClick={handleGetStarted}>Get Started</button>
                                    <button className="watch__btn" onClick={handlePlayVideo}>
                                        <span><i className="ri-play-fill"></i></span>Watch Video
                                    </button>
                                </div>
                            </div>

                            <div className="hero__img">
                                <div className="hero__img-wrapper">
                                    <div className="box-01">
                                        <div className="box-02">
                                            <div className="box-03">
                                                <div className="box__img">
                                                    <img src={heroImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="heart__rate">
                                        <h5>Heart Rate</h5>
                                        <span><i className="ri-heart-pulse-fill"></i></span>
                                        <h5>2567 BPM</h5>
                                    </div>

                                    <div className="gym__location">
                                        <span><i className="ri-map-pin-2-fill"></i></span>
                                        <h5>Find a new gym near you</h5>
                                    </div>

                                    <div className="dumble__icon">
                                        <img src={dumbleIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {showVideo && !videoEnded && (
                        <div className="hero__video-container">
                            <video src={video} autoPlay controls onEnded={handleVideoEnded}></video>
                        </div>
                    )}

                    {showVideo && videoEnded && (
                        <div className="hero__wrapper">
                            <div className="hero__content">
                                <h2 className='section__title'>Exercise is the key to a
                                    <span className="highlights"> Healthy</span> Lifestyle
                                </h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, <br />doloribus labore illo vel quis asperiores. </p>

                                <div className="hero__btns">
                                    <button className="register__btn" onClick={handleGetStarted}>Get Started</button>
                                    <button className="watch__btn" onClick={handlePlayVideo}>
                                        <span><i className="ri-play-fill"></i></span>Watch Video
                                    </button>
                                </div>
                            </div>

                            <div className="hero__img">
                                <div className="hero__img-wrapper">
                                    <div className="box-01">
                                        <div className="box-02">
                                            <div className="box-03">
                                                <div className="box__img">
                                                    <img src={heroImg} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="heart__rate">
                                        <h5>Heart Rate</h5>
                                        <span><i className="ri-heart-pulse-fill"></i></span>
                                        <h5>2567 BPM</h5>
                                    </div>

                                    <div className="gym__location">
                                        <span><i className="ri-map-pin-2-fill"></i></span>
                                        <h5>Find a new gym near you</h5>
                                    </div>

                                    <div className="dumble__icon">
                                        <img src={dumbleIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <div ref={registrationRef}></div> {/* Ref for the registration component */}
        </div>
    );
}

export default Hero;
