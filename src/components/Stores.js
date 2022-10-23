import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Stores () {
    return (
    <Container style={{ marginTop: "40px", textAlign: "center" }}>
        <Row>
            <Col><Image src="[IMG SRC]" alt="Aldi" roundedCircle />
                <Col>
                <h3 style= {{ fontWeight: "bold" }} >ALDI</h3>
                <p> Delivery * Pickup </p>
                </Col>
            </Col>

            <Col><Image src="[IMG SRC]" alt="Sprouts" roundedCircle />
                <Col>
                <h3 style= {{ fontWeight: "bold" }} >SPROUTS</h3>
                <p> Delivery * Pickup </p>
                </Col>
            </Col>

            <Col><Image src="[IMG SRC]" alt="krogers" roundedCircle />
                <Col>
                <h3 style= {{ fontWeight: "bold" }} >KROGERS</h3>
                <p> Delivery * Pickup </p>
                </Col>
            </Col>
        </Row>   

    </Container> 
    )
}
export default Stores