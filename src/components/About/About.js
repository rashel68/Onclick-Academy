import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    const cardstyle = {
        padding: '10px',
        borderRadius: '10px',
        backgroundColor: 'rgb(245 244 244)'
    };
    return (
        <Row style={{ marginTop: '70px', marginBottom: '10px' }}>

            <Row>
                <Col md={7} className="text-start">
                    <h2>Welcome to Onclick Academy</h2>
                    <p>Onclick Academy is one of the latest IT technological based Institutions in Bangladesh where academic excellence is a tradition, teaching a passion and building career a habit. Onclick Academy is sister concern of Onclick System Limited. Onclick Academy currently has more than 1000+ all kinds of undergraduate students and over 10 Experience faculties. The student population is projected to grow at 100% annually.</p>
                    <p>The students of Onclick Academy experience an exciting academic life with copious opportunity to explore and nurture their innate talent and also were taking part in the Global IT sector. Onclick Academy also focuses on providing the necessary support to our IT Sector.
                    </p>
                </Col>
                <Col md={5}>
                    <img className="img-fluid" src="./about-pic.jpg" alt="about pic" />
                </Col>
            </Row>
            <Row className="mt-5 g-4" style={{ backgroundColor: '#f8f8f8', paddingBottom: '20px' }}>
                <h2>Our Mission and Vision</h2>
                <p>Onclick Academy is one of the latest IT technological based training Institutions.</p>
                <Col md={6} className="text-start">
                    <div style={cardstyle}>
                        <h3>Our Mission</h3>
                        <p>Onclick Academy strives to be among the most successful and recognized IT Farm in Bangladesh. It shall aim to integrate new practices and trends, and foster critical thinking, creativity, innovation, originality and excellence in an environment that promotes practical and research-based IT knowledge.</p>
                    </div>
                </Col>
                <Col md={6} className="text-start">
                    <div style={cardstyle}>
                        <h3>Our Vision</h3>
                        <p>Onclick Academy adheres to the academic thrust of quality and excellence, call of service and contribute to the betterment and advancement of web design, web development, Graphic design, Digital Marketing. Onclick Academy is committing to nurture and shaping the intellectual growth and skills of the students through the application and dissemination of advanced IT technology</p>
                    </div>
                </Col>

            </Row>
        </Row>
    );
};

export default About;