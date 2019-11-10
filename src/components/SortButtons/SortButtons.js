import React from 'react';

const SortButtons = ({ sorting, value }) => {
    return (
        <div>
            <button className="sort_but" onClick={() => { sorting(value, 1) }}>/\</button>
            <button className="sort_but" onClick={() => { sorting(value, 0) }}>\/</button>
        </div>
    );
}


export default SortButtons;