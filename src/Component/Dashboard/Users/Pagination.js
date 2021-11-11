import React from 'react'

const Pagination = ({postsPerPage, totalPosts,paginate}) => {
    const data = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        data.push(i)
    }
    console.log(data)
    return (
        <nav>
            <ul className="pagination">
                {data.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href="" className="page-link">
                            {number ? <span style={{color:'black'}}>{number}</span>:<span></span>}
                        </a>
                    </li>
                ))}

            </ul>
        </nav>
    )
}
export default Pagination