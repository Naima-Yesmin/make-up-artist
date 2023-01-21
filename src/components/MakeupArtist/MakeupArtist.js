import React, { useEffect, useState } from 'react';
import ArtistCart from '../ArtistCart/ArtistCart';
import Artists from '../Artists/Artists';
import './MakeupArtist.css';


const MakeupArtist = () => {
    const [artists, setArtists] = useState([]);
    const [artistCart, setArtistCart] = useState([]);
    useEffect(() => {
        fetch('./artist.JSON')
            .then(res => res.json())
            .then(data => setArtists(data))

    }, [])


    const handleAddToCart = (artists) => {
        const newCart = [...artistCart, artists];
        setArtistCart(newCart);

    }
    return (
        <div className='makeupArtist-container'>
            <div className="artists-container ">
                {
                    artists.map(artist => <Artists
                        key={artist.key}
                        artist={artist}
                        handleAddToCart={handleAddToCart}
                    ></Artists>)
                }
            </div>
            <div className="cart-container">
                <ArtistCart artistCart={artistCart}></ArtistCart>
            </div>
        </div>
    );
};

export default MakeupArtist;