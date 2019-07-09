import React from "react";
import "./App.css";
import LoginClass from "./componentsClass/loginClass"; //Componente con clases
import Login from "./components/login";

const App: React.FC<any> = () => {
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
    </div>
  );
};

export default App;
