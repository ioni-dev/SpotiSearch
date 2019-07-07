import React from 'react';
import '../styles/Songs.css';

// The individual information of each track
const SongCard = (props) => {
    const { name, artists: artistNameArr, album: { images: [images], release_date }, } = props.list;
    const [{ name: artistName }] = artistNameArr;
    return (
        <div key={props.i} className='card-container'>
            <img src={images.url} style={{ height: '180px' }} alt='album' />
            <p className='song-title'>{name}</p>
            <p className='artist'>{artistName}</p>
            <p className='release'>{release_date}</p>
        </div>
    )
}

export default SongCard;