import  { useEffect, useState } from 'react';

const useMentors = () => {
    const[mentors, setMentors]= useState([])
            useEffect(()=>{
                fetch('./mentors.json')
                .then(res => res.json())
                .then(data => setMentors(data))
            },[]);
    return [mentors, setMentors];
};

export default useMentors;