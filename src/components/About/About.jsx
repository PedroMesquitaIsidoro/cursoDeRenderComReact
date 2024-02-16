import React, { useRef, useState } from 'react';
import "./About.css";
import images from "../../constants/images";
import { about_stats } from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import { FaPlay } from "react-icons/fa";

const About = () => {
    const vidRef = useRef(null);
    const [toggleVideo, setToggleVideo] = useState(false);
    const playVideo = () => {
        setToggleVideo(!toggleVideo);
        if (toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    }

    return (
        <div className='about section-p'>
            <div className='container'>
                <div className='about-content'>
                    <div className='about-grid grid'>
                        <img src={images.About_Silvano} alt="" className='about-img mx-auto' />
                        <div className='section-title'>
                            <h3 className='text-orange'>Eu sou <span className='text-dark'>Silvano</span></h3>
                            <p className='text mx-auto'>Bem-vindo ao curso de Enscape! Sou Silvano Vasconcelos, arquiteto e instrutor do curso. Com anos de experiência na área, compartilho meu conhecimento para simplificar o aprendizado e elevar suas habilidades de render e visualização arquitetônica.

                                Explore técnicas práticas, aprenda de maneira definitiva e transforme sua abordagem ao design arquitetônico. Junte-se a mim nesta jornada de descoberta e aprimoramento profissional.

                                Vamos criar juntos!</p>
                        </div>
                    </div>

                    <div className='about-grid grid'>

                    </div>

                    <div className='about-grid grid'>
                        <div className='section-title'>
                            <h3 className='text-orange'>Cena em vídeo</h3>
                            
                        </div>

                        <div className='about-video'>
                            <video className='about-video' autoPlay loop ref={vidRef}>
                                <source src={video} type="video/mp4" />
                            </video>
                            <button type="button" className='vidPlayBtn flex flex-c' onClick={playVideo}>
                                <FaPlay className='text-brown' size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About