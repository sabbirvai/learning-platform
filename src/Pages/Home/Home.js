import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../assets/banner.gif'
import './Home.css';
import Button from 'react-bootstrap/Button';

const Home = () => {
    return (
        <Container className='text-center p-4'>
            <Row>
                <Col lg="6">
                    <h2 className='text-primary'>Hey Hello viewers, <br /> Welcome to my Awesome Courses</h2>
                    <p className='text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quia magni commodi at voluptates rem, officia sequi voluptatum ab, doloribus suscipit possimus doloremque. Possimus adipisci voluptatum saepe quisquam similique vero, nulla unde quas placeat aut odit temporibus magni odio doloremque!</p>
                    <Button variant="primary">Please Login</Button>{' '}
                </Col>

                <Col lg="6">
                    <img src={banner} alt="" className='mt-4 banner' />
                </Col>
            </Row>
        </Container>
    );
};

export default Home;