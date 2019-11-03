import React, { useEffect } from 'react';
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

let actioncontext = null;
let storecontext = null;

const Info = props => {
    useEffect(() => {
        actioncontext.obtenerUsuarios()
    }, []);
    function handleSubmit(e, actions, store, props) {
        e.preventDefault();
        actions.enviarUsuario(store.dataUsers, props.history);
    };
    return (
        <Context.Consumer>
            {({ store, actions }) => {
                actioncontext = actions;
                storecontext = store;
                return (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-4">
                                <h3>Bienvenido al panel usuario</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-3">
                                <h6>Información actual</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-2">
                                <p>Nombre de usuario:</p>
                            </div>
                            <div className="col-md-4">
                                {store.dataUsers.nickname}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-2">
                                <p>Contraseña:</p>
                            </div>
                            <div className="col-md-4">
                                {store.dataUsers.password}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-2">
                                <p>Correo:</p>
                            </div>
                            <div className="col-md-4">
                                {store.dataUsers.mail}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 offset-2">
                                <p>Fecha de nacimiento:</p>
                            </div>
                            <div className="col-md-4">
                                {store.dataUsers.bornDate}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8 offset-3">
                                <h6>Editar información</h6>
                            </div>
                        </div>

                        <form onSubmit={e => handleSubmit(e, actions, store, props)}>
                            <div className="row">
                                <div className="col-md-4 offset-2">
                                    <p>Nombre de usuario:</p>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Escriba aquí"
                                        name="nickname"
                                        onChange={e => actions.inputDatosUsuario(e)}
                                        onSubmit={e => handleSubmit()}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-2">
                                    <p>Contraseña:</p>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Escriba aquí"
                                        name="password"
                                        onChange={e => actions.inputDatosUsuario(e)}
                                        onSubmit={e => handleSubmit()}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-2">
                                    <p>Correo:</p>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Escriba aquí"
                                        name="mail"
                                        onChange={e => actions.inputDatosUsuario(e)}
                                        onSubmit={e => handleSubmit()}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-2">
                                    <p>Fecha de nacimiento:</p>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        type="date"
                                        className="form-control"
                                        placeholder="Escriba aquí"
                                        name="bornDate"
                                        onChange={e => actions.inputDatosUsuario(e)}
                                        onSubmit={e => handleSubmit()}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 offset-8">
                                    <button className="btn btn-primary">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                );
            }}
        </Context.Consumer>
    );
}
Info.propTypes = {
    match: PropTypes.any,
    history: PropTypes.any
};

/*
 <div className="col-md-12">
            <p>Eliga fecha de vencimiento:</p>
            <input
              type="date"
              name="time"
              onChange={e => actions.obtenerInfo(e)}
            >
            </input>
          </div>
          */

export default Info;

