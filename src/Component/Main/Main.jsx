import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../Shaired/LeftNav/LeftNav';
import MainNav from '../Shaired/MainNave/MainNav';
import { Outlet, useLoaderData } from 'react-router-dom';
import RightNav from '../Shaired/RightNave/RightNav';
import CategoryData from '../CategoryData/CategoryData';

const Main = () => {

    let categoryNews=useLoaderData()
    console.log(categoryNews)


    
    return (
        <div>
        
        <Container>
            <Row>
                <Col lg={3}>

                    <LeftNav></LeftNav>

                </Col>

                <Col lg={6}>

                    {
                        categoryNews.map(dataAll=> <CategoryData  key={dataAll.category_id} dataCat={dataAll}></CategoryData>)
                    }

                    

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

export default Main;