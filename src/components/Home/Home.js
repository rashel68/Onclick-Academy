import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import About from '../About/About';
import Course from '../Course/Course';
import useCourses from '../hooks/useCourses';
import useMentors from '../hooks/useMentors';
import Mentor from '../Mentor/Mentor';
import Slider from '../Slider/Slider';

const Home = () => {
    const [courses] = useCourses([]);
    const [mentors] = useMentors([]);
    return (

        <Row>
            <Row>
                <Slider></Slider>
            </Row>
            <Row>
                <About></About>
            </Row>
            <Row className="mt-4">
                <h2>Our Services</h2>
                <p>For more information about our courses, including how to apply and to know more about the course details, please see the individual course pages</p>
                <Row xs={1} md={3} className="g-4 mt-0 mb-3" >
                    {
                        courses.slice(0, 3).map(course => <Course course={course} key={course.id}></Course>)
                    }
                </Row>
            </Row>
            <Row className="mt-4 mb-5">
                <h2>Our Mentors</h2>
                <p>Find Out More About Onclick Academy Team Members</p>
                <Carousel fade variant="dark">
                    <Carousel.Item>
                        <Row md={4} className="g-4">
                            {
                                mentors.slice(0, 4).map(mentor => <Mentor mentor={mentor} key={mentor.id}></Mentor>)
                            }
                        </Row>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Row md={4} className="g-4">
                            {
                                mentors.slice(4, 8).map(mentor => <Mentor mentor={mentor} key={mentor.id}></Mentor>)
                            }
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>


        </Row>

    );
};

export default Home;