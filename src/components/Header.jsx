const Header = () => {
  const menu = [
    {
      id: "1",
      label: "Characters",
      active: false,
      href:"#"
    },
     {
      id: "1",
      label: "Comics",
      active: false,
      href:"#"
    },
     {
      id: "2",
      label: "Movies",
      active: true,
      href:"#"
    },
     {
      id: "3",
      label: "TV",
      active: false,
      href:"#"
    },
     {
      id: "4",
      label: "Games",
      active: false,
      href:"#"
    },
     {
      id: "5",
      label: "collectibles",
      active: false,
      href:"#"
    },
     {
      id: "6",
      label: "Videos",
      active: false,
      href:"#"
    },
     {
      id: "7",
      label: "Fans",
      active: false,
      href:"#"
    },
     {
      id: "8",
      label: "News",
      active: false,
      href:"#"
    },
     {
      id: "9",
      label: "Shop",
      active: false,
      href:"#"
    },

  ]
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
