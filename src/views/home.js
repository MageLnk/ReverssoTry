import React from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

let actioncontext = null;
let storecontext = null;

const Home = props => {
  function handleSubmit(e, actions, store, props) {
    e.preventDefault();
    actions.login(store.login, props.history);
  };
  return (
    <Context.Consumer>
      {({ store, actions }) => {
        actioncontext = actions;
        storecontext = store;
        return (
          <div className="container">
            <form onSubmit={e => handleSubmit(e, actions, store, props)}>
              <div className="row">
                <div className="col-md-8 offset-4">
                  <h1>Login Reversso</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 offset-2">
                  <label htmlFor="usuario">Ingrese usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Usuario"
                    name="user"
                    onChange={e => actions.inputDatosLogin(e)}
                    onSubmit={e => handleSubmit()}
                    required
                  />
                </div>
                <div className="col-md-6 offset-2">
                  <label htmlFor="password">Ingrese contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="pass"
                    onChange={e => actions.inputDatosLogin(e)}
                    onSubmit={e => handleSubmit()}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 offset-8">
                  <button className="btn btn-info">
                    Enviar
                  </button>
                  <button className="btn btn-danger">
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        );
      }}
    </Context.Consumer >
  );
}
Home.propTypes = {
  match: PropTypes.any,
  history: PropTypes.any
};

export default Home;