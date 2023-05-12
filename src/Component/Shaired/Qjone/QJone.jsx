import React from 'react';
import "./QZone.css"
import { Container } from 'react-bootstrap';
import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"



const QJone = () => {
    return (
        <Container className="">

            <h6 className='QZoneText'>Q-Zone</h6>

            <img className='mt-3' src={qZone1} alt="Q-Zone1" />
            <img className='mt-3' src={qZone2} alt="Q-Zone2" />
            <img className='mt-3' src={qZone3} alt="Q-Zone3" />



        </Container>
    );
};

export default QJone;