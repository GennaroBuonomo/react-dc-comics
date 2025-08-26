import React from 'react'

const Footer = () => {
  return <footer>
    <div className="blue-banner">
      <div className="container">
        <div className="row">
          <div className="col-100">
            <div className="icons-list">
              <div><img src="./img/buy-comics-digital-comics.png" alt="" />
              <span>DIGITAL COMICS</span>
              </div>
              <div><img src="./img/buy-comics-merchandise.png" alt="" />
              <span>DC MERCHANDISE</span>
              </div>
              <div><img src="./img/buy-comics-subscriptions.png" alt="" />
              <span>SUBSCRIPTION</span>
              </div>
              <div><img src="./img/buy-comics-shop-locator.png" alt="" />
              <span>COMIC SHOP LOCATOR</span>
              </div>
              <div><img src="./img/buy-dc-power-visa.svg" alt="" />
              <span>DC POWER VISA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="middle-footer">
        <div className="container">
          <div className="row">
            <div className="col-50 row">
               <div className="column col-25 padding-20">
            <h3>DC COMICS</h3>
            <ul>
              <li>Characters</li>
              <li>Comics</li>
              <li>Movies</li>
              <li>TV</li>
              <li>Games</li>
              <li>Videos</li>
              <li>News</li>
            </ul>

            <h3>SHOP</h3>
            <ul>
              <li>Shop DC</li>
              <li>Shop DC Collectibles</li>
            </ul>
          </div>

          <div className="column col-25 padding-20">
            <h3>DC</h3>
            <ul>
              <li>Terms Of Use</li>
              <li>Privacy Policy (New)</li>
              <li>Ad Choices</li>
              <li>Advertising</li>
              <li>Jobs</li>
              <li>Subscriptions</li>
              <li>Talent Workshops</li>
              <li>CPSC Certificates</li>
              <li>Ratings</li>
              <li>Shop Help</li>
              <li>Contact Us</li>
            </ul>
          </div>

              <div className="column col-25 padding-20">
            <h3>SITES</h3>
            <ul>
              <li>DC</li>
              <li>MAD Magazine</li>
              <li>DC Kids</li>
              <li>DC Universe</li>
              <li>DC Power Visa</li>
            </ul>
          </div>
        </div>
            <div className="col-50 background-dc"></div>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <div className="container">
          <div className="row">
            <div className="col-50">
              <button>SING-UP NOW!</button>
            </div>
            <div className="col-50 display-flex">
              <span className="follow-us">FOLLOW US</span>
              <div className="social-icons">
              <img src="./img/footer-facebook.png" alt="" />
              <img src="./img/footer-twitter.png" alt="" />
              <img src="./img/footer-youtube.png" alt="" />
              <img src="./img/footer-pinterest.png" alt="" />
              <img src="./img/footer-periscope.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
  </footer>;
  
}

export default Footer
