import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function TileCard({tile}){
    return(
        <div className="dashboard">
            <div className="tile-item">
                <Title title={tile.title} />
                <Category category={tile.category} />
                <div className="pinned-image">
                    <PinnedImg media={tile.gallery} />
                    <Pins pins={tile.pins} />
                </div>
                <SmImages media={tile.gallery} />
                <FollowButton />
            </div>
        </div>
    )
};

TileCard.proptypes={
    tile:PropTypes.object
};

function Title({title}) {
    return(
        <div className="title">
        {title}
        </div>
    )
};

Title.proptypes={
    title:PropTypes.string.isRequired
};

function Category({category}) {
    return(
        <div className="category">
        {category}
        </div>
    )
};

Category.proptype={
    category:PropTypes.string.isRequired
};

function PinnedImg({media}) {
    return(
        <div>
            <img src={media.bigImg} alt="adventure" className="big-image"/>
        </div>
    )
};
            
function Pins({pins}) {
    return(
        <div className="pins"><i class="fas fa-thumbtack" /> {pins}</div>
    )
};

function SmImages({media}) {
    return(        
        <div className="sm-images">
            <div>
                <img src={media.smImg1} alt="hike" className="img-item"/>
            </div>
            <div>
                <img src={media.smImg2} alt="hike" className="img-item"/>
            </div>
            <div>
                <img src={media.smImg3} alt="hike" className="img-item"/>
            </div>
        </div>
    )
}

function FollowButton() {
    return(
        <div className="follow-button">
            <button type="button" class="btn-light">Follow</button>
        </div>
    )
}

const testTile = {
    title:"Ideas for outside shanangins",
    category:"Travel Forever",
    pins: 1465,
    gallery: {
        bigImg:"https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        smImg1:"https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        smImg2:"https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        smImg3:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
}

ReactDOM.render(<TileCard tile={testTile} />, document.querySelector('#root'));