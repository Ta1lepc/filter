import React from 'react'

const Toolbar = (props) => {
    return (
        <div className="btn">
            <button onClick={()=>props.onSelectFilter(0)}>All</button>
            <button onClick={() => props.onSelectFilter(1)}>Websites</button>
            <button onClick={() => props.onSelectFilter(2)}>Flayers</button>
            <button onClick={() => props.onSelectFilter(3)}>Business Cards</button>
        </div>
    );
}

export default Toolbar