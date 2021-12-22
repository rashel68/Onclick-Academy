
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import useCourses from '../hooks/useCourses';

const Services = () => {
    const [courses] = useCourses([]);
    return (

        <Row xs={1} md={3} className="g-4 my-5" >
            {
                courses.map(course => <Course course={course} key={course.id}></Course>)
            }
        </Row>

    );
};

export default Services;