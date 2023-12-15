import React from 'react'
 
function NavBar() {
  return (
    <nav className="navbar">
      <p>showing movies in the table </p>
      <thead className="table">
        <tr>
          <th>Table</th>
          <th>Rental</th>
          <th>Genre</th>
          <th>Rentalrate</th>
        </tr>
      </thead>
    </nav>
  )
}

export default NavBar
