import React from 'react';

function Nav() {
    return (
        <>
        <nav>
            <ul className="nav-bar">
            <li className="nav-item">
                    <a className="link" href="/">
                    CAFFE<span className="green">LUNA </span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="link" href="#menu">
                    Menus
                    </a>
                </li>
                <li className="nav-item">
                    <a className="link" href="#about">
                    Events
                    </a>
                </li>
                <li className="nav-item">
                    <a className="link" href="#reservations">
                    Book Now
                    </a>
                </li>
                <li className="nav-item">
                    <a className="link" href="#about">
                    Contact Us
                    </a>
                </li>
            </ul>
        </nav>
        <div className="address-bar">
        136 East Hargett St. <br />
        Raleigh, NC <br />
        919-832-6090
        </div>
        </>
    )
};

export default Nav;