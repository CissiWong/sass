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
          <div className="tab" />
          <form className="form">
            <div className="input-box">
              <p>Flyg från:</p>
              <input
                className="input left"
                placeholder="Var flyger du ifrån?" />
              <hr />
            </div>
            <div>
              <p>Flyg till:</p>
              <input
                className="input right"
                placeholder="Vart vill du resa?" />
              <hr />
            </div>
            <div className="bottom-container">
              <div className="text"><p>Stockholm, Göteborg eller Malmö?</p>
              </div>
              <button className="search-btn">
                <p>Sök och beställ</p>
                <hr />
              </button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}
