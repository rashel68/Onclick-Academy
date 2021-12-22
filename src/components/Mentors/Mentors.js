import React from 'react';
import { Row } from 'react-bootstrap';
import useMentors from '../hooks/useMentors';
import Mentor from '../Mentor/Mentor';

const Mentors = () => {
    const [mentors] = useMentors([])

    return (
        <Row md={4} className="g-4 my-5">
            {
                mentors.map(mentor => <Mentor mentor={mentor} key={mentor.id}></Mentor>)
            }
        </Row>
    );
};

export default Mentors;