import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

const Footer = () => {
    const footerIcon = <FontAwesomeIcon icon={faCaretRight} />
    const homeIcon = <FontAwesomeIcon icon={faHome} />
    const phnIcon = <FontAwesomeIcon icon={faPhone} />
    const mailIcon = <FontAwesomeIcon icon={faEnvelope} />

    const fLStyle = {
        textDecoration: 'none',
        color: '#172e5e',
        fontWeight: 'bold'
    }
    return (
        <Row className="border-top border-3 border-success text-start py-3 bg-light" expand="lg">

            <h3 className="text-success mb-4">Onclick Academy</h3>

            <Col md={8}>
                <Row>
                    <h4>Important Links</h4>
                    <Col>
                        <p><Link style={fLStyle} to="/home">{footerIcon} Home</Link></p>
                        <p><Link style={fLStyle} to="/services">{footerIcon} Services</Link></p>
                        <p><Link style={fLStyle} to="/mentors">{footerIcon} Our Mentors</Link></p>
                        <p><Link style={fLStyle} to="/about">{footerIcon} About Us</Link></p>
                    </Col>

                    <Col>
                        <p><Link style={fLStyle} to="/home">{footerIcon} Apply Course</Link></p>
                        <p><Link style={fLStyle} to="/services">{footerIcon} Apply Seminar</Link></p>
                        <p><Link style={fLStyle} to="/mentors">{footerIcon} Apply Workshop</Link></p>
                        <p><Link style={fLStyle} to="/about">{footerIcon} Apply Scholarship</Link></p>
                    </Col>

                    <Col>
                        <p><Link style={fLStyle} to="/home">{footerIcon} Blog</Link></p>
                        <p><Link style={fLStyle} to="/services">{footerIcon} Terms and Condition</Link></p>
                        <p><Link style={fLStyle} to="/mentors">{footerIcon} Privacy Policy</Link></p>
                        <p><Link style={fLStyle} to="/about">{footerIcon} Sitemap</Link></p>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>
                <h4>Address</h4>
                <p>{homeIcon} House No. 8/A/10 (Level-6), Road: #13, Dhanmondi, Dhaka, Bangladesh.</p>
                <p>{phnIcon} 01720000000</p>
                <p>{mailIcon} example@gmail.com</p>
            </Col>
        </Row>
    );
};

export default Footer;