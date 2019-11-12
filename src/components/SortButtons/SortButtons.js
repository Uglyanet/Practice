import React from 'react';

const SortButtons = ({ sorting, value, type }) => {
    return (
        <div className="sort_container">
            <button className="sort_but" onClick={() => { sorting(value, 1, type) }}>/\</button>
            <button className="sort_but" onClick={() => { sorting(value, 0, type) }}>\/</button>
        </div>
    );
}


export default SortButtons;