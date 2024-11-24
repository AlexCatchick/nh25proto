// import React from 'react'
import logo from '../assets/logo.png';
import './logoAnimate.css';
export default function HeroAnimate() {
    return (
        <div style={{
            width: '50vw',
            height: '500px',
            display: 'flex',
        }}>
            <div
                style={{
                    marginTop: '15px',
                    width: '300px',
                    height: '250px',
                }}>
                <img className="logoAnimation" src={logo} />
            </div>
            <div className='headerText'>
                <div className="tag text-green-800 text-7xl poppins-bold"><b>N</b>MIT <b>H</b>ACKS</div>
                <div className="tag text-8xl">2025</div>
            </div>

        </div>
    )
}
