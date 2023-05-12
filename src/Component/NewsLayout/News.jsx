import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shaired/LeftNav/LeftNav';
import MainNav from '../Shaired/MainNave/MainNav';
import { Outlet } from 'react-router-dom';
import RightNav from '../Shaired/RightNave/RightNav';
import CategoryData from '../CategoryData/CategoryData';

const News = () => {
    return (
        <div>
        <Container>
            <Row>

                <Col lg={9}>

                    <CategoryData></CategoryData>

                   <Outlet></Outlet>

                </Col>

                <Col lg={3}>

                    <RightNav></RightNav>

                </Col>



            </Row>
        </Container>
        </div>
    );
};

export default News;