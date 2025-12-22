import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FeaturedWork = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const projects = [
        {
            title: 'E-Commerce Platform',
            desc: '300% increase in conversions with scalable marketplace solution',
            metric: '50K+ Active Users'
        },
        {
            title: 'Healthcare Portal',
            desc: 'HIPAA-compliant patient management system reducing admin time by 60%',
            metric: '10K+ Patients'
        },
        {
            title: 'Financial Dashboard',
            desc: 'Real-time analytics platform processing $10M+ in transactions',
            metric: '$10M+ Processed'
        }
    ];

    return (
        <section className="dark-section" id="work" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Featured Work</h2>
                    <p>Delivering measurable results for businesses across industries</p>
                </motion.div>

                <div className="services-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="service-card work-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                        >
                            <h3 style={{ color: 'white', marginBottom: '16px' }}>{project.title}</h3>
                            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '16px', lineHeight: '1.7', marginBottom: '24px' }}>
                                {project.desc}
                            </p>
                            <div style={{
                                fontSize: '28px',
                                fontWeight: '800',
                                background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            }}>
                                {project.metric}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
