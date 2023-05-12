import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import "./RightNav.css"

import { FaFacebookF,FaTwitter,FaInstagram} from "react-icons/fa";
import QJone from '../Qjone/QJone';
import imgBg from "../../../assets/bg1.png"

const RightNav = () => {
    return (
        <div>
            <div className="login">
                <h2>Login With</h2>
                <Button className='mt-3' variant="outline-success"><i class="fa fa-google" aria-hidden="true"></i> Login With Google</Button>
                <Button className="mt-2" variant="outline-success"><i class="fa fa-github" aria-hidden="true"></i> Login With Github</Button>
            </div>
            <h3 className="mt-4  mb-4">Find Us On</h3>
            <ListGroup className="mb-4">
                <ListGroup.Item><FaFacebookF /> Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter />Twitter</ListGroup.Item>
                <ListGroup.Item><FaInstagram />Instagram</ListGroup.Item>
            </ListGroup>

            <div className="Q_Zone">
                <QJone></QJone>
            </div>
            <div className="detilse mt-4">
                <img className="" src={imgBg} alt="img-bg" />
                <div className="info">
                </div>
            </div>
            






            



        </div>
    );
};

export default RightNav;