import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import imgOne from "../../assets/1.png"
import imgTow from "../../assets/1.png"
import imgThree from "../../assets/3.png"

const EditorInside = () => {
    return (

        <div>
  
    <CardGroup>
    <Card>
      <Card.Img variant="top" src={imgOne} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src={imgTow} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
      <Card.Img variant="top" src={imgThree} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>



    </div>

    );
};

export default EditorInside;