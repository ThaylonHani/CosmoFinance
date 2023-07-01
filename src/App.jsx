import "./App.css";

import { BsStarFill,BsStarHalf } from "react-icons/bs";


function App() {
  return (
    <div className="App">
      <header>
        <h1>Bank</h1>

        <ul>
          <li>About</li>
          <li>Features</li>
          <li>Support</li>
        </ul>

        <p>
          Need help? <a href="#">Contact Us</a>
        </p>
      </header>

      <main>
        <div className="main-principal">
          <section>
            <h2 className="text-main">SIMPLE.</h2>
            <h2 className="text-main">MONEY.</h2>
            <h2 className="text-main">CARD.</h2>
            <ul className="main-ul">
              <li>Security</li>
              <li>Convenience</li>
              <li>Transactions</li>
            </ul>
          </section>
          <img
            src="/credit-card.png"
            alt="Cartão de crédito"
            className="credit-card"
          />
        </div>

        <section id="business">
          <div className="message-information">
            <div className="messages">
              <h3>
                38M+
              </h3>
              <p>Businesses have already joined us!</p>
            </div>
            <div className="messages" >
            <h3>
                0%
              </h3>
              <p>Zero percent fee to any transaction</p>
            </div>
            <div id="message-star">
              <img src="/avatar.png" alt="" width="64px" />
              <section>
              <p className="stars">
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill />
                <BsStarHalf/>
              </p>
                <p className="stars">
                So many people like this service
              </p>
              </section>
            </div>
          </div>
        </section>

        <section className="topics">
          <h3 className="topics-name">About</h3>
          <p className="topics-description">
            <strong>Our mission is to provide</strong> you with the information
            and tools you need to make informed financial decisions and achieve
            your financial goals.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
