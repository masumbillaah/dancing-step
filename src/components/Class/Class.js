import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Class = props => {
    console.log(props.data);
    const { form, img, cost, instruction, id } = props.data;



    return (
        <Card className="d-flex flex-row my-5" style={{ width: '100%' }}>
            <img src={img} alt="" />
            <Card.Body className="text-black">
                <Card.Title> <h3>Form: {form}</h3> </Card.Title>
                <Card.Text>
                    <h5>Course Fee: <span className="text-danger">$ {cost}</span></h5>
                </Card.Text>
                <Card.Text>
                    {instruction}
                </Card.Text>
                <NavLink to={`/class/${id}`} className="bg-danger px-4 py-2 text-decoration-none fs-5 text-light rounded mx-3">Join Class</NavLink>
            </Card.Body>
        </Card>
    );
};

export default Class;