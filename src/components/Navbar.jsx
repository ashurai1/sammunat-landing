import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-logo">Sammunat</div>

                    <ul className="navbar-menu">
                        <li><a onClick={() => scrollTo('home')}>Home</a></li>
                        <li><a onClick={() => scrollTo('services')}>Services</a></li>
                        <li><a onClick={() => scrollTo('work')}>Work</a></li>
                        <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
                    </ul>

                    <button className="btn btn-primary">We Are Hiring</button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
