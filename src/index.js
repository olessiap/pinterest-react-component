import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

function PinterestBoard({headline, tiles}) {
    return(
        <div className="full-board">
            <BoardHeadline headline={headline}/>
            <TileCards tiles={tiles} />
        </div>
    )
}


function BoardHeadline({headline}) {
    return(
        <div className="board-headline">
            <BoardIcon />
            <BoardName category={headline.category} />
            <Stats stats={headline.stats} />
        </div>
    )
}

function BoardIcon() {
    return(
        <div className="board-icon">
            TF
        </div>
    )
}

function BoardName({category}) {
    return(
        <div className="board-name">{category}</div>
    )
}

function Stats({stats}) {
    return(
        <div className="stats">
            <div className="dividor">________</div>
            <div className="stat-item highlighted-item">
                <div className="stat-number">{stats.boards}</div>
                <div className="stat-name">Boards</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">{stats.totalPins}</div>
                <div className="stat-name">Pins</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">{stats.likes}</div>
                <div className="stat-name">Likes</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">{stats.followers}</div>
                <div className="stat-name">Followers</div>
            </div>
            <div className="stat-item">
                <div className="stat-number">{stats.following}</div>
                <div className="stat-name">Following</div>
            </div>
            <div className="dividor">________</div>
        </div>
    )
}

function TileCards({tiles}){
    return(
        <div className="tile-dashboard">
            {tiles.map(tile => (
                <div className="tile-item" key={tile.id}>
                    <Title title={tile.title} />
                    <Category category={tile.category} />
                    <div className="pinned-image">
                        <PinnedImg media={tile.gallery} />
                        <Pins pins={tile.pins} />
                    </div>
                    <SmImages media={tile.gallery} />
                    <FollowButton />
                </div>
            ))}
        </div>
    )
};

TileCards.proptypes={
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

const testDash = {
    id:1,
    category:"Travel Forever",
    stats: {
        boards: 13,
        totalPins:345,
        likes:8743,
        followers:54,
        following:321
    }
};

const testTile = [
    {
        id:1,
        title:"Ideas for outside shanangins",
        category:"Travel Forever",
        pins: 1465,
        gallery: {
            bigImg:"https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg1:"https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg2:"https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg3:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    },
    {
        id:2,
        title:"Ideas for outside shanangins",
        category:"Travel Forever",
        pins: 1465,
        gallery: {
            bigImg:"https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg1:"https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg2:"https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg3:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    },
    {
        id:3,
        title:"Ideas for outside shanangins",
        category:"Travel Forever",
        pins: 1465,
        gallery: {
            bigImg:"https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg1:"https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg2:"https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg3:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    },
    {
        id:4,
        title:"Ideas for outside shanangins",
        category:"Travel Forever",
        pins: 1465,
        gallery: {
            bigImg:"https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg1:"https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg2:"https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg3:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    },
    {
        id:5,
        title:"Ideas for outside shanangins",
        category:"Travel Forever",
        pins: 1465,
        gallery: {
            bigImg:"https://images.pexels.com/photos/891252/pexels-photo-891252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg1:"https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg2:"https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            smImg3:"https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        }
    },
    {
        id:6,
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
]

ReactDOM.render(<PinterestBoard tiles={testTile} headline={testDash}/>, document.querySelector('#root'));