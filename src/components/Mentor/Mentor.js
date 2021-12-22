import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Mentor = (props) => {
    const { name, title, img } = props.mentor;
    return (
        <Col className="mb-3">
            <Card className="border-0">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{title}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Mentor;