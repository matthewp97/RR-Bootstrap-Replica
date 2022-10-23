import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Card2() {
    return (
        <Card>
            <Card.Body>
                <Button variant="light">Popular</Button>{' '}
                <Button variant="light">Produce</Button>{' '}
                <Button variant="light">Health & Medicine</Button>{' '}
                <Button variant="light">Bakery</Button>{' '}
                <Button variant="light">Frozen</Button>{' '}
                <Button variant="light">Snacks & Candy</Button>{' '}
                <Button variant="light">Personal Care</Button>{' '}
                <Button variant="light">Beauty</Button>{' '}
                <Button variant="light">Household</Button>{' '}
                <Button variant="light">Beverages</Button>{' '}
                <Button variant="light">Meat & Seafood</Button>{' '}<br />
                <Button variant="light">Baby</Button>{' '}
                <Button variant="light">Alcohol</Button>{' '}
                <Button variant="light">Pets</Button>{' '}
                <Button variant="light">Breakfast</Button>{' '}
            </Card.Body>
        </Card>
    )
}


export default Card2;