import React from 'react';
import './Artists.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Artists = (props) => {
    const { img, name, nationality, gender, age, income } = props.artist;
    return (
        < Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <h3>Name:{name}</h3>
                <h4>Nationality:{nationality}</h4>
                <h4>Gender:{gender}</h4>
                <h4>Age:{age}</h4>
                <h4>Income:${income}</h4>
                <br />
                <button
                    onClick={() => props.handleAddToCart(props.artist)}
                    className='btn-regular'>
                    {<FontAwesomeIcon icon={faShoppingCart} />} Add to Cart</button>
            </Card.Body>
        </Card >



    );
};
export default Artists;