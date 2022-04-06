import React from 'react';

function Hours() {
    return (
        <>
        <div className="reserve-now">
        <button type="submit" className="reserve-btn">RESERVE A TABLE</button>
        <button type="submit" className="reserve-btn">PLACE A TO GO ORDER</button>
        </div>
        
        <div className="hours-container">
            <ul className="hours">
                <li className="hours-li">HOURS </li>
                <li className="hours-li">Tuesday 5-9PM</li>
                <li className="hours-li">Wednesday 5-9PM</li>
                <li className="hours-li">Thursday 5-9PM</li>
                <li className="hours-li">Friday 5-10PM</li>
                <li className="hours-li">Saturday 5-10PM</li>
            </ul>
        </div>
        </>
    )
}

export default Hours;