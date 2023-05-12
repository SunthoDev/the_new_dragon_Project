import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import CategoryData from '../CategoryData/CategoryData';
import RightNav from '../Shaired/RightNave/RightNav';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import EditorInside from '../EditorsInside/EditorInside';

const NewsDetails = () => {


    let detailsData=useLoaderData()
    const {image_url,details,thumbnail_url,title,total_view}=detailsData
    console.log(detailsData)
    return (
        <div>


        <Container>
            <Row>

                <Col lg={9}>

<div className="parent"  style={{border:" 1px solid #dde0e2" , padding:" 20px"}}>

    <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
            <Card.Title> {title} </Card.Title>
            <Card.Text>{details}</Card.Text>
            <Link to="/categoryData/1" variant="primary"><FaArrowLeft /> All news in this category</Link>
        </Card.Body>
    </Card>


</div>

    <div className="editorsInside mt-5">

        <EditorInside></EditorInside>

    </div>
                
                </Col>

                <Col lg={3}>

                    <RightNav></RightNav>

                </Col>

            </Row>
        </Container>

        </div>
    );
};

export default NewsDetails;