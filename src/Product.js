import React ,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Product.css';

const Product = (props) => {
    const {id, title,category,price,description,image,rating} = props;
    const [expanded, setExpanded] = useState(false);
    const [cart, setCart] = useState([]);

    const toggleDescription = () => {
        setExpanded(!expanded);
    };
    const addToCart = () => {
        const updatedCart = [...cart, props];
        setCart(updatedCart);
        console.log(updatedCart);
    };
    
    return (
    <div className='product-card'>
     <Card key = {id} style={{ width: '18rem', minHeight:'600px',display:'flex',padding:'1rem', margin:'1rem',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
        <div className='img'>
      <Card.Img variant="top" src={image} style={{height:'100%'}}/>
      </div>
      <Card.Body style={{minHeight:'380px'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {category}
        </Card.Text>
        <Card.Text className={expanded ? 'expanded' : 'truncated'}>
            {description}
        </Card.Text>
        <Button variant="link" onClick={toggleDescription}>
        {expanded ? 'See Less' : 'See More'}
        </Button>
        <Card.Text style={{color:'green'}}>{price} €</Card.Text>
        <Card.Text style={{color:'green'}}>Ratings({rating.count}) {rating.rate} </Card.Text>
        <Button variant="primary" onClick={addToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
            
        </div>
    );
};

export default Product;