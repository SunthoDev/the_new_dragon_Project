import React, { useEffect, useState } from 'react';
import './LEftNave.css'
import { Link } from 'react-router-dom';

const LeftNav = () => {

    let [category,setCategory]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/categories")
        .then(res=> res.json())
        .then(data=> setCategory(data))
        .catch(error=>console.log(error))
    },[])


    return (
        <div>
            <h2>All Caterogy</h2>
            <h3 className="nationalNews">National News</h3>

            {
                category.map(data=> <p key={data.id}>

                        <Link to={`/categoryData/${data.id}`} className="newsInfo">{data.name}</Link>
                </p>)
            }
             
        </div>
    );
};

export default LeftNav;