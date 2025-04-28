
import React from 'react'
import { Link } from 'react-router-dom'
import { Products } from './collections/Products'

export const Collection = () => {
    return (
        <>
           <Link to="/Collection" style={{ textDecoration: 'none' }}></Link>
           <Products/>
        </>
    )
}