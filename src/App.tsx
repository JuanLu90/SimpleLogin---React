import React from "react";
import "./App.css";
import LoginClass from "./componentsClass/loginClass"; //Componente con clases
import Login from "./components/login";
import { connect } from "react-redux";
import * as actions from "./actions";
import { IGlobalState } from "./reducers/reducers";

interface IProps {}

interface IPropsGLobal {
  value: number;
  increaseNumber: () => void;
  decreaseNumber: () => void;
  resetNumber: () => void;
  increaseNumberTo: (n: number) => void;
}

const App: React.FC<IProps & IPropsGLobal> = props => {
  const divStyle = {
    margin: "200px auto"
  };

  const divStyle2 = {
    margin: "auto"
  };

  return (
    <div className="container pt-4" style={divStyle}>
      <div className="row w-75" style={divStyle2}>
        <div className="col bg-warning h3 m-2">
          <div className="row p-3">
            <div className="col text-center">Login with Class</div>
          </div>
          <div className="row">
            <div className="col border border-dark m-4 p-3">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <LoginClass />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col bg-dark text-light h3 m-2">
          <div className="row p-3">
            <div className="col text-center">Login with Function</div>
          </div>
          <div className="row">
            <div className="col border border-warning  m-4 p-3">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Login />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* props.value lo recibe del archivo 'reduce.ts' */}
      <div className="text-center h3 mt-4"> Num: {props.value} </div>
      <div className="text-center">
        <button className="btn btn-info m-1" onClick={props.resetNumber}>
          Reset
        </button>
        <button
          className="btn btn-secondary m-1"
          onClick={props.increaseNumber}
        >
          +
        </button>
        <button
          className="btn btn-secondary m-1"
          onClick={props.decreaseNumber}
        >
          -
        </button>
        <button
          className="btn btn-danger text-light m-1"
          onClick={() => props.increaseNumberTo(50)}
        >
          50
        </button>
        <button
          className="btn btn-danger text-light m-1"
          onClick={() => props.increaseNumberTo(100)}
        >
          100
        </button>
      </div>
    </div>
  );
};

// Mapea STORE to UI recibir props del store
const mapStateToProps = (state: IGlobalState) => ({
  value: state.value
});

// Envia las acciones
const mapDispatchToProps = {
  // " 'actions' is from 'import' from 'actions' ";
  resetNumber: actions.resetNumber,
  increaseNumber: actions.increaseNumber,
  decreaseNumber: actions.decreaseNumber,
  increaseNumberTo: actions.increaseNumberTo
};

//'connect(mapStateToProps)' mapea el estado de redux para recibirla en mis props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
