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
        <div className="big-image">
            {media.bigImg}
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
            <div className="img-item">
                {media.smImg1}
            </div>
            <div className="img-item">
                {media.smImg2}
            </div>
            <div className="img-item">
                {media.smImg3}
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
    category:"Party Time",
    pins: 1465,
    gallery: {
        bigImg:'bigImg',
        smImg1:'img1',
        smImg2:'img2',
        smImg3:'img3'
    }
}

ReactDOM.render(<TileCard tile={testTile} />, document.querySelector('#root'));