import {Link} from 'react-router-dom'
import React from 'react'

export default () => (
  <div>
    <p>{ 'well, this seems to work ' }</p>
    <h2>{ 'this is the header' }</h2>

    <ul>
      <li>
        <Link to="/">
          {'Home'}
        </Link>
      </li>
      <li>
        <Link to="/about">
          {'About'}
        </Link>
      </li>
    </ul>
  </div>
)
