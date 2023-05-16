import { Header } from "./components/Header";

import { FcSimCardChip } from "react-icons/fc";

import "./App.css"

function App() {
  return (
    <div className="App">
      
      <Header />

      <div className="principal-content">

        <section className="principal-content-main">
          <h3>
          Cartão Cosmos Black, o melhor para você atravessar galáxias.
          </h3>
          <label htmlFor="">
            <div></div>
          </label>
          <button>
            Conhecer
          </button>
        </section>

      </div>
      

      <main>
        <div className="main-info">
          <section>
          <h3>
            Por que nos contratar ?
          </h3>
          <p>
            Além de facilidade entregamos segurança e qualidade a todos nossos consumidores, com acesso bancário 24h por dia, pelo aplicativo do cartão.
          </p>
          </section>
          <section>
            <h3>
              Nossos cartões
            </h3>
            <p>
              Nossos cartões são modernos e com um toque especial de segurança, podendo ver sua conta bancária a qualquer momento sem dor de cabeça.
            </p>
          </section>
          <section>
            <h3>
              Nos contrate
            </h3>
            <p>
              Estamos com promoções especiais para nossos fiéis assinantes, não perca e se junte ao time 
            </p>
          </section>
        </div>

        <div className="main-card">

          <section id="card">
            <div className="card-name">
            <h2>
              CosmosBlack
              </h2>
              <FcSimCardChip style={{fontSize: "2rem"}}/>
           </div>
            <div className="card-info">
            
              <h3>
                  Pedro cohen
              </h3>
              <h4>
              XXXX XXXX XXXX XXXX
              </h4>
            </div>
              <div id="cosmo"/>
          </section>

          <ul>
            <li>
              Segurança
            </li>
            <li>
              Acessibilidade 
            </li>
            <li>
              Rápido
            </li>
              </ul>
        </div>

        <div className="main-card-horizontal">

          <section id="card-horizontal">
            <div className="card-name">
            <h2>
              CosmosBlack
              </h2>
              <FcSimCardChip style={{fontSize: "2rem", marginLeft: "10%"}}/>
           </div>
            <div className="card-info">
            
              <h4>
              XXXX XXXX XXXX XXXX
              </h4>
              <h3>
                  Pedro cohen
              </h3>
            </div>
              <div id="cosmo"/>
          </section>

          <h3>
            2 modelos para cada tipo de gosto
          </h3>
        </div>
      </main>
    </div>
  );
}

export default App;
