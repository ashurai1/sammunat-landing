const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <div className="footer-logo">Sammunat</div>
                        <p style={{ marginTop: '16px', lineHeight: '1.7' }}>
                            Enterprise software solutions that drive real business growth.
                        </p>
                        <p style={{ marginTop: '16px' }}>United States</p>
                        <p>contact@sammunat.com</p>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#home">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#services">Web Development</a></li>
                            <li><a href="#services">Video Editing</a></li>
                            <li><a href="#services">CRM & ERP</a></li>
                            <li><a href="#services">Custom Software</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Stay Updated</h4>
                        <p>Subscribe to our newsletter</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email" />
                            <button type="submit" className="btn btn-primary" style={{ padding: '12px 20px' }}>
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {year} Sammunat LLC. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="#privacy">Privacy Policy</a>
                        <a href="#terms">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
