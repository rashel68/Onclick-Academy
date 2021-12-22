import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (

        <Carousel fade style={{ marginTop: '70px' }}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/banner01.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/banner1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/banner2.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>

    );
};

export default Slider;