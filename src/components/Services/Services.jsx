import React from 'react';
import "./Services.css";
import { services } from "../../constants/data";


const Services = () => {
    return (
        <div className='services section-p' id="services">
            <div className='container'>
                <div className='services-content'>
                    <div className='section-title'>
                        <h3 className='text-orange'>Propósito do curso </h3>
                        {/*<p className='text'>I offer the right solutions for your digital business.</p>*/}
                    </div>

                    <div className='services-list grid'>
                        {services.map((service, index) => (
                            <div className='services-item text-center' key={index}>
                                <div className='services-item-img'>
                                    {service.icon} {/* Ajuste o valor de size conforme necessário */}
                                </div>
                                <div className='services-item-text'>
                                    <h4 className='fs-22 fw-5 op-08'>{service.title}</h4>
                                    <p className='text mx-auto'>{service.paragraph}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
