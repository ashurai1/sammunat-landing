import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            icon: '💻',
            title: 'Web Development',
            desc: 'Scalable web applications built with React, Node.js, and modern cloud infrastructure that grow with your business.'
        },
        {
            icon: '🎬',
            title: 'Video Editing',
            desc: 'Professional video production and editing services that tell your brand story and engage your audience.'
        },
        {
            icon: '📊',
            title: 'CRM & ERP Solutions',
            desc: 'Custom business management systems that streamline operations and provide real-time insights.'
        },
        {
            icon: '⚙️',
            title: 'Custom Software',
            desc: 'Bespoke software solutions designed specifically for your unique business requirements and workflow.'
        }
    ];

    return (
        <section className="services" id="services" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Our Services</h2>
                    <p>Comprehensive solutions to power your digital transformation</p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.03,
                                transition: { duration: 0.3, ease: 'easeOut' }
                            }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
