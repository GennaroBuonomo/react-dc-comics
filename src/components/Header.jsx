import React from 'react'

const Header = () => {
  return <header>
    <div className="container">
      <div className="row">
        <div className="col-25">
          <div id="logo-header">
            <img src="./img/dc-logo.png" alt="Dc Comics" />
          </div>
        </div>
        <div className="col-75">
          <ul id="menu">
            <li>
              <a href="#">Characters</a>
            </li>
            <li className="active">
              <a href="#">Comics</a>
            </li>
            <li>
              <a href="#">Movies</a>
            </li>
            <li>
              <a href="#">TV</a>
            </li>
            <li>
              <a href="#">Games</a>
            </li>
            <li>
              <a href="#">Collectibles</a>
            </li>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Fans</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>;
  
}

export default Header
