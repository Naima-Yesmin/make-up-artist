import React from 'react';

const SelectedArtist = (props) => {
    const { artists } = props;
    return (
        <div>
            <h3>{artists}</h3>
        </div>
    );
};

export default SelectedArtist;