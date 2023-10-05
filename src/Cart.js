import React from 'react';
import Card from 'react-bootstrap/Card';
// import './Cart.css';

const Cart = ({ props }) => {
    return (
        <div className='cart-page'>
            <h2>Your Cart</h2>
            <div className='cart-items'>
                {props.map((product, index) => (
                    <Card key={index} style={{ width: '18rem', padding: '1rem', margin: '1rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>{product.category}</Card.Text>
                            <Card.Text style={{ color: 'green' }}>{product.price}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Cart;
