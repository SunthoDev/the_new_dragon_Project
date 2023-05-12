import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingUp = () => {

    let [accept,setAccept]=useState(false)

    let handleAcceptCondition=(event)=>{

        setAccept(event.target.checked)
    }


    return (
        <div className=''>
            <Container>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" name='name' placeholder="name" />
                        <Form.Label>Your Photo-URL</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Enter email" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                        <Form.Label>Your Password</Form.Label>
                        <Form.Control type="Password" name='password' placeholder="Your Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                        onClick={handleAcceptCondition}
                        type="checkbox"
                        label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" disabled={!accept}  type="submit" value="Login" >Register</Button>
                    <p><small>Already Haven Account? Plz..<Link to="/login">Login</Link></small></p>

                </Form>
            </Container>
        </div>
    );
};

export default SingUp;