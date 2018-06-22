import React, { Component } from "react";
import { AppWrapper, BarraSustancia, RitmoSustanciaWrapper } from "./styles";

const capitalize = str =>
  str.length ? str[0].toUpperCase() + str.slice(1) : "";

const RitmoSustancia = ({ nombre, ritmosustancia, id }) => (
  <RitmoSustanciaWrapper key={id}>
    <h3>Name: {nombre}</h3>
    <p>Swag: {ritmosustancia}</p>
    <BarraSustancia ritmosustancia={ritmosustancia} />
  </RitmoSustanciaWrapper>
);

class App extends Component {
  state = {
    nombre: "",
    ritmosustancias: [
      {
        id: new Date().getTime(),
        nombre: "Super Diana",
        ritmosustancia: 100
      }
    ]
  };

  componentDidMount() {
    document.querySelector("#nombreInput").focus();
  }

  obtenerRitmosustancia = e => {
    e.preventDefault();

    this.setState(({ nombre, ritmosustancias }) => ({
      nombre: "",
      ritmosustancias: [
        ...ritmosustancias,
        {
          id: new Date().getTime(),
          nombre: nombre,
          ritmosustancia: Math.floor(Math.random() * 100) + 1
        }
      ]
    }));
  };

  render() {
    const { nombre, ritmosustancias } = this.state;
    return (
      <AppWrapper>
        <div className="container">
          <h1>SWAG-O-METER</h1>
          <form>
            <input
              onChange={e =>
                this.setState({ nombre: capitalize(e.target.value) })
              }
              placeholder="Insert your name"
              value={nombre}
              id="nombreInput"
              type="text"
            />
            <button
              disabled={nombre.length === 0}
              type="submit"
              onClick={this.obtenerRitmosustancia}
            >
              Show me my swag
            </button>
          </form>
          {ritmosustancias.sort((a, b) => b.id - a.id).map(RitmoSustancia)}
        </div>
      </AppWrapper>
    );
  }
}

export default App;
