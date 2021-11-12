import React from 'react'
import { useState } from 'react';
import './Pagination.css'
const Pagination = ({postsPerPage, totalPosts,paginate}) => {
    const [stats,setStats] =useState(false)
    const data = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        data.push(i)
    }
    console.log(data)
    return (
        <nav>
            <ul className="pagination" style={{justifyContent:'center',display:'flex',alignItems:'center'}}>
                {data.map(number => (
                    <li key={number} className="page-item" id="one" >
                        <a onClick={() => paginate(number)} className="page-link">
                            {number }
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}
export default Pagination