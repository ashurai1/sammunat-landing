import { motion } from 'framer-motion';

const Hero = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-grid">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        >
                            We Build Digital Products That <span className="hero-gradient-text">Drive Real Business Growth</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        >
                            Sammunat helps businesses design, build, and scale high-performance web platforms, custom software, and intelligent digital solutions.
                        </motion.p>

                        <motion.div
                            className="hero-cta"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.button
                                className="btn btn-primary"
                                onClick={() => scrollTo('contact')}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                                Start Your Project
                            </motion.button>
                            <motion.button
                                className="btn btn-secondary"
                                onClick={() => scrollTo('services')}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                                Explore Services
                            </motion.button>
                        </motion.div>
                    </div>

                    <motion.div
                        className="hero-visual"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div
                            className="floating-shape shape-1"
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        ></motion.div>
                        <motion.div
                            className="floating-shape shape-2"
                            animate={{
                                y: [0, 15, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
