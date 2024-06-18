import React from 'react'

const Test = () => {
    return (
       <div className="container">
            <div className="sticky-element">
                Sticky Element
            </div>
            <div className="content">
                {Array.from({ length: 100 }, (_, i) => (
                    <p key={i}>Scroll to see the sticky element in action.</p>
                ))}
            </div>
        </div>
    );
}

export default Test