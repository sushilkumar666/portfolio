import React from 'react'
import a from '../assets/1.png'
import b from '../assets/2.png'
import c from '../assets/3.png'
import Banner from './Banner'

function Homemain() {
    return (
        <>
            <div className='bgMain'>
                <img className='a' src={a} alt="" />
                <img className='a' src={c} alt="" />
                <img className='a' src={b} alt="" />
                <Banner />
            </div>
        </>

    )
}

export default Homemain