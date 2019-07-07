import React from 'react';
import SongCard from '../common/SongCard';
import '../styles/Songs.css';
// here is the principal component, it's a grid in here i can render each songCard
class Songs extends React.Component {
    render() {
        const { tracksAvailable } = this.props;
        if (tracksAvailable.length !== 0) {
            return (
                <div>
                    <div className='tracks-titles'>
                        {tracksAvailable.map((list, i) => <SongCard key={i} list={list} />)}
                    </div>
                    <div className='pageBtns'>
                        <button type='button' className='pageBtn nextBtn'>next</button>
                        <button type='button' className='pageBtn prevBtn'>previous</button>
                    </div>
                </div>
            )
        } else {
            return (<h1>No songs, you can start searching!</h1>)
        }
    }
}

export default Songs;