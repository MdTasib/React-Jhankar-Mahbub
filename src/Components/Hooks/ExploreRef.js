import React, { useRef } from 'react';

const ExploreRef = () => {
    const ref = useRef(null);
    const handleClick = () => {
        // console.log(ref);
        ref.current.focus();
    }

    return (
        <div>
            <input ref={ref} type="text" />
            <button onClick={handleClick}>Focus Input</button>
        </div>
    );
};

export default ExploreRef;