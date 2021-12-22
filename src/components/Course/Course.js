import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Course = (props) => {
    const { courseName, description, img, duration, courseFee } = props.course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <Card.Footer>
                        <h6><span>Fee: {courseFee}</span> | <span>Duration: {duration}</span></h6>
                    </Card.Footer>
                    <Button style={{ marginTop: '10px' }}>Enroll Now</Button>
                </Card.Body>
            </Card>
        </Col>


    );
};

export default Course;