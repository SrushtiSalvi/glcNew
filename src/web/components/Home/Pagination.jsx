import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div>
      <ul id="pagination" className="flex space-x-3 justify-end">
        {pageNumbers.map((number) => (
          <li key={number}>
            <p
              className="cursor-pointer font-semibold"
              onClick={() => paginate(number)}
            >
              {number}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
