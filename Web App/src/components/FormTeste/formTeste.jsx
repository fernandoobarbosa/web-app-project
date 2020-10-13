import React, { Component } from "react";
import "./estilo.css";
import {Redirect
} from "react-router-dom";

class FormTeste extends Component {
  constructor() {
    super();
    this.state = {
      auth: [],
      name: "",
      password: "",
      postagens: [],
      redirect: false

    };

    this.create = this.create.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.get = this.get.bind(this);
  }

  get(e) {
    // read all entities
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("name"));
    console.log(localStorage.getItem("password"));
    fetch("//localhost:3080/todos", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          postagens: response,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  create(e) {
    e.preventDefault();
    fetch("//localhost:3080/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
        localStorage.setItem("auth", response.auth);
        this.setState({ redirect: response.auth })
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange(changeObject) {
    this.setState(changeObject);
  }

  render() {
    if(this.state.redirect){
       return <Redirect to = "/dashboard"/>
    }
        
    return (
      <div className="container">
        <div className="row justify-content-center card-body">
          <div className="col-md-4">
            <h1 className="display-4 text-center">Welcome</h1>
            <form className="d-flex flex-column">
              <label htmlFor="name">
                <h1>Name:</h1>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-control font-weight-bold"
                  value={this.state.name}
                  onChange={(e) => this.handleChange({ name: e.target.value })}
                  required
                />
              </label>
              <label htmlFor="notes" className="exampleInputPassword1">
                <h1>Password:</h1>
                <input
                  name="notes"
                  id="notes"
                  type="password"
                  className="form-control espaco"
                  value={this.state.notes}
                  onChange={(e) =>
                    this.handleChange({ password: e.target.value })
                  }
                  required
                />
              </label>

              <button
                className="btn btn-default btn-primary"
                type="button"
                onClick={(e) => this.create(e)}
              >
                Enter
              </button>
              {/* <button
                className="btn btn-info espaco"
                type="button"
                onClick={(e) => this.get(e)}
              >
                GET
              </button> */}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormTeste;
