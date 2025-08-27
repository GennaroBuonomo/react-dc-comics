const Header = () => {
  const menu = [
    {
      id: 1,
      label: "Characters",
      active: false,
      href:"#"
    },
     {
      id: 2,
      label: "Comics",
      active: false,
      href:"#"
    },
     {
      id: 3,
      label: "Movies",
      active: true,
      href:"#"
    },
     {
      id: 4,
      label: "TV",
      active: false,
      href:"#"
    },
     {
      id: 5,
      label: "Games",
      active: false,
      href:"#"
    },
     {
      id: 6,
      label: "collectibles",
      active: false,
      href:"#"
    },
     {
      id: 7,
      label: "Videos",
      active: false,
      href:"#"
    },
     {
      id: 8,
      label: "Fans",
      active: false,
      href:"#"
    },
     {
      id: 9,
      label: "News",
      active: false,
      href:"#"
    },
     {
      id: 10,
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
            { menu.map(link => {
              const { id, href, label, active } = link;
              return (
                <li key={id} className={active ? 'active' : ''}>
                 <a href={href}>{label}</a>
                </li>                 
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  </header>;
  
}

export default Header
