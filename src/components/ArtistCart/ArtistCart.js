import React from 'react';
import SelectedArtist from '../SelectedArtist/SelectedArtist';

const Cart = (props) => {
    const { artistCart } = props;

    let salary = 0;
    for (const artists of artistCart) {
        salary = salary + artists.income;

    }
    return (
        <div>
            <h3>Artist Added:{props.artistCart.length}</h3>
            <h4>Total Income:${salary}</h4>
            <SelectedArtist></SelectedArtist>
            {
                artistCart.map(artist => <SelectedArtist
                    artists={artist.name}
                    key={artist.key}
                ></SelectedArtist>)
            }
        </div >
    );
};

export default Cart;