import React, { Component } from "react";
import { Button, Form, FormGroup, FormControl, Label } from "react-bootstrap";
import styles from './login.module.css';

export default class Login extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: "",
        password: ""
      };
    }
  
    validateForm() {
      return this.state.email.length > 0 && this.state.password.length > 0;
    }
  
    handleChange = event => {
      this.setState({
        [event.target.id]: event.target.value 
      });
    }
  
    handleSubmit = event => {
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="Login">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <Form.Label>Email, dude!</Form.Label>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <Form.Label>Password, Man!</Form.Label>
              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              type="submit"
            >
              Login
            </Button>
          </Form>
        </div>
      );
    }
  }

 