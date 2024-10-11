import React from 'react';
import { Layout, Row, Col } from 'antd';
import FooterLogo from '../../images/footerLogo.png';
import FooterOverlay from '../../images/footerBg.jpg';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const { Footer } = Layout;

const MainFooter: React.FC = () => {
    return (
        <Footer className='main-footer' style={{ backgroundImage: `url(${FooterOverlay})` }}>
            <div className='main-container'>
                <Row gutter={[16, 16]}>
                    {/* Footer Logo and Description */}
                    <Col xs={24} sm={12} md={9}>
                        <div className='footer-logo'>
                            <img src={FooterLogo} alt='Footer Logo' />
                        </div>
                        <div className='footer-intro'>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </Col>

                    {/* Navigation Links */}
                    <Col xs={24} sm={12} md={5}>
                        <div className='footer_link_box'>
                            <div className='footer_label'>
                                <h4>Navigation</h4>
                            </div>
                            <ul className='footer_link_list'>
                                <li>Home</li>
                                <li>My Products</li>
                                <li>Check Authenticity</li>
                                <li>View Cart</li>
                            </ul>
                        </div>
                    </Col>

                    {/* Product Links */}
                    <Col xs={24} sm={12} md={5}>
                        <div className='footer_link_box'>
                            <div className='footer_label'>
                                <h4>Products</h4>
                            </div>
                            <ul className='footer_link_list'>
                                <li>2 Wheeler</li>
                                <li>3 Wheeler</li>
                                <li>4 Wheeler</li>
                                <li>Spare Parts</li>
                            </ul>
                        </div>
                    </Col>

                    {/* Social Media Links */}
                    <Col xs={24} sm={12} md={5}>
                        <div className='footer_link_box'>
                            <div className='footer_label'>
                                <h4>Connect With Us</h4>
                            </div>
                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                                <a href="https://telegram.org" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faTelegram} />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Footer>
    );
};

export default MainFooter;
