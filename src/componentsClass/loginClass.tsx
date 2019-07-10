import React from "react";
import { IUser } from "../interfaces";
import TableClass from "../componentsClass/tableClass";
// var jwtDecode = require("jwt-decode");

interface IState {
  inputValueUsername: string;
  inputValuePassword: string;
  users: IUser[];
}

class LoginClass extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      inputValueUsername: "",
      inputValuePassword: "",
      users: []
    };

    this.getToken = this.getToken.bind(this);
    this.updateInputUsername = this.updateInputUsername.bind(this);
    this.updateInputPassword = this.updateInputPassword.bind(this);
  }

  updateInputUsername(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValueUsername: event.target.value });
  }

  updateInputPassword(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValuePassword: event.target.value });
  }

  getToken = () => {
    fetch("http://localhost:8080/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.inputValueUsername,
        password: this.state.inputValuePassword
      })
    }).then(response => {
      if (response.ok) {
        response.text().then(token => {
          sessionStorage.setItem("token", token);
        });

        fetch("http://localhost:8080/api/users", {
          //es una promesa
          // headers: {
          // "Content-type": "application/json",
          // Authorization: "Bearer " + token
          // }
        }).then(response => {
          if (response.ok) {
            response.json().then(users => this.setState({ users }));
          }
        });
      }
    });
  };

  render() {

    const token = sessionStorage.getItem("token");
    if (token) {
      // var decoded = jwtDecode(token);
    }

    return (
      <>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="usernameClass"
            placeholder="User"
            value={this.state.inputValueUsername}
            onChange={this.updateInputUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            id="passwordClass"
            placeholder="Password"
            value={this.state.inputValuePassword}
            onChange={this.updateInputPassword}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-dark w-50"
            onClick={this.getToken}
          >
            Login
          </button>
        </div>
        {this.state.users.length > 0 && (
          <div className="container">
            <hr className="m-4 bg-dark" />
            <div className="row">
              <div className="col">
                <TableClass users={this.state.users} />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default LoginClass;
