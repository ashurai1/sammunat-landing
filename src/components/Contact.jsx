import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focused, setFocused] = useState({ name: false, email: false, message: false });
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFocus = (field) => {
        setFocused({ ...focused, [field]: true });
    };

    const handleBlur = (field) => {
        setFocused({ ...focused, [field]: false });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
            setFormData({ name: '', email: '', message: '' });

            // Hide success message after 4 seconds
            setTimeout(() => {
                setShowSuccess(false);
            }, 4000);
        }, 1000);
    };

    return (
        <section className="contact" id="contact" ref={ref}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2>Let's Build Something Amazing</h2>
                    <p>Ready to transform your business? Get in touch with our team.</p>
                </motion.div>

                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="floating-input-group">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => handleFocus('name')}
                            onBlur={() => handleBlur('name')}
                            required
                            disabled={isSubmitting}
                        />
                        <label
                            htmlFor="name"
                            className={formData.name || focused.name ? 'active' : ''}
                        >
                            Full Name
                        </label>
                    </div>

                    <div className="floating-input-group">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => handleFocus('email')}
                            onBlur={() => handleBlur('email')}
                            required
                            disabled={isSubmitting}
                        />
                        <label
                            htmlFor="email"
                            className={formData.email || focused.email ? 'active' : ''}
                        >
                            Email Address
                        </label>
                    </div>

                    <div className="floating-input-group">
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => handleFocus('message')}
                            onBlur={() => handleBlur('message')}
                            required
                            disabled={isSubmitting}
                        />
                        <label
                            htmlFor="message"
                            className={formData.message || focused.message ? 'active' : ''}
                        >
                            Your Message
                        </label>
                    </div>

                    <motion.button
                        type="submit"
                        className="btn btn-primary"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>
                </motion.form>

                {/* Success Animation */}
                <AnimatePresence>
                    {showSuccess && (
                        <motion.div
                            className="success-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="success-card"
                                initial={{ scale: 0.5, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: -50 }}
                                transition={{
                                    type: 'spring',
                                    damping: 15,
                                    stiffness: 200
                                }}
                            >
                                <motion.div
                                    className="success-icon"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        delay: 0.2,
                                        type: 'spring',
                                        damping: 10,
                                        stiffness: 200
                                    }}
                                >
                                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                                        <motion.circle
                                            cx="32"
                                            cy="32"
                                            r="30"
                                            stroke="#10b981"
                                            strokeWidth="3"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        />
                                        <motion.path
                                            d="M20 32L28 40L44 24"
                                            stroke="#10b981"
                                            strokeWidth="3"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            fill="none"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{ duration: 0.4, delay: 0.5 }}
                                        />
                                    </svg>
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    Message Sent Successfully!
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Contact;
