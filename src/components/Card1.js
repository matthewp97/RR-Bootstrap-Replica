import React from 'react';
import Card from 'react-bootstrap/Card';

function Card1() {
  return (
    <Card className="bg-light text-black ">
      <Card.Img src="https://www.instacart.com/assets/hubs/category_grocery_desktop-55e4a66309ac045b399fdb52a1a2bd0a8d0b2c31e7aa2305e167344709ca806d.jpg" alt="Instacart Image" />
      <Card.ImgOverlay>
        <Card.Title></Card.Title>
        <Card.Text >
         <h1>Grocery stores with same-day delivery or pickup</h1>
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Card1;
