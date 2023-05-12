import { Button, Card, Container, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { CiBookmarkCheck } from "react-icons/ci";
import { HiShare } from "react-icons/hi";
import { HiEye } from "react-icons/hi2";
import Rating from 'react-rating';
import { HiStar } from "react-icons/hi2";







const CategoryData = ({dataCat}) => {
    

    let {_id,title,thumbnail_url,image_url,details,category_id,author,total_view,rating}=dataCat


        // // use param deya daynamic id component vetor loade kore jay  deStructuring kore 
        // let {id}=useParams()
        // let [data,setData]=useState([])
        // useEffect(()=>{
        //     fetch("http://localhost:5000/category/3")
        // },[])


    return (
        <Container>
        <Card className="mb-4">

            <Card.Header className="d-flex justify-content-between align-items-center">

                <div className="d-flex">
                    <Image style={{width:"45px",height:"45px"}} src={author &&  author.img} roundedCircle/>
                    <div className="ms-2">
                        <h6>{author &&  author.name}</h6>
                        <h6>{author && moment(author?.published_date).format('YYYY MM DD')}</h6>
                    </div>
                </div>

               <div className="d-flex justify-content-between align-items-center">
               <h4 className="me-4">< HiShare /></h4>
                <CiBookmarkCheck />
                </div>

            </Card.Header>



            <Card.Body>
                <Card.Img variant="top" src={image_url} />

                <Card.Text>{

                details.length <= 250 ? <>{details}</> : <> {details.slice(0,250)}... <br /> <Link to={`/newsDetails/${_id}`}>Red More</Link> </>

                }</Card.Text>


            </Card.Body>
            <Card.Footer className="text-muted d-flex justify-content-between align-items-center">

                <div className="div">
                <Rating
                    placeholderRating={rating?.number}
                    readonly
                    emptySymbol={<HiStar></HiStar>}
                    placeholderSymbol={<HiStar></HiStar>}
                    fullSymbol={<HiStar></HiStar>}
                />
                    <span>{rating?.number}</span>
                </div>
                
                <div className="div">
                    <HiEye /> {total_view}
                </div>

                
            </Card.Footer>
    </Card>
        </Container>
    );
};

export default CategoryData;