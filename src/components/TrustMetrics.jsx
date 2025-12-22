import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const TrustMetrics = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const metrics = [
        { number: '300+', label: 'Projects Delivered' },
        { number: '900+', label: 'Happy Clients' },
        { number: '100+', label: 'Expert Team' },
        { number: '4.9/5', label: 'Client Rating' }
    ];

    return (
        <section className="trust-metrics" ref={ref}>
            <div className="container">
                <div className="metrics-grid">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="metric-number">{metric.number}</div>
                            <div className="metric-label">{metric.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustMetrics;
