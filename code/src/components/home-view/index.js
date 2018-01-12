import React from "react"
import "./style.css"
import bg from "./front-header.jpg"

export default class HomeView extends React.Component {
  render() {
    return (
      <div>
        <main
          className="container"
          style={{ backgroundImage: `url(${bg})` }} >
          <form className="form">
            <label>
              <h2>Flyg från</h2>
              <div className="input-container">
                <input
                  className="input left"
                  placeholder="Var flyger du ifrån?" />
              </div>
              <h2>Flyg till</h2>
              <div className="input-container">
                <input
                  className="input right"
                  placeholder="Vart vill du resa?" />
              </div>
            </label>
            <div>Stockholm</div>
            <div>Göteborg</div>
            <div>Malmö</div>
            <button className="nw search-btn" />
          </form>
        </main>
      </div>
    )
  }
}
