import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const JoinClass = () => {
    const { classId } = useParams();
    const [join, setJoin] = useState({});
    useEffect(() => {
        fetch(`./data.JSON${classId}`)
            .then(res => res.json())
            .then(data => setJoin(data))
    }, [join])
    return (
        <Card className="d-flex flex-row my-5" style={{ width: '100%' }}>
            <img src={join.img} alt="" />
            <Card.Body>
                <Card.Title> <h3>Form: {join.form}</h3> </Card.Title>
                <Card.Text>
                    <h5>Course Fee: <span className="text-danger">$ {join.cost}</span></h5>
                </Card.Text>
                <Card.Text>
                    {join.instruction}
                </Card.Text>

                <NavLink to="/classes" className="bg-info px-4 py-2 text-decoration-none fs-5 text-light rounded me-5">See Classes</NavLink>
                <NavLink to="/home" className="bg-info px-4 py-2 text-decoration-none fs-5 text-light rounded">Home</NavLink>
            </Card.Body>
        </Card>
    );
};

export default JoinClass;