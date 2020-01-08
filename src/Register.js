import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class Register extends React.Component {
  handleChange = obj => {
    this.props.dispatch({ type: "CHANGE_REGISTER_FORM", payload: obj });
  };

  registeruser = () => {
    const { registerform } = this.props;
    delete registerform.confirmpassword;
    axios.post("http://localhost:8083/postuser", registerform).then(res => {
      console.log(res, "res");
    });
    this.props.router.push("/");
  };
  render() {
    const { registerform } = this.props;
    return (
      <div style={{ width: "30%", "margin-left": "30%", "margin-top": "10%" }}>
        <fieldset>
          <Form>
            <FormGroup>
              <Label for="exampleName"> Name</Label>
              <Input
                type="text"
                name="Name"
                id="name"
                placeholder="Name"
                value={registerform.name}
                onChange={e =>
                  this.handleChange({ key: "name", value: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                value={registerform.email}
                onChange={e =>
                  this.handleChange({ key: "email", value: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password "
                value={registerform.password}
                onChange={e =>
                  this.handleChange({ key: "password", value: e.target.value })
                }
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword"> Confirm Password</Label>
              <Input
                type="password"
                name="confirmpassword"
                id="examplePassword"
                placeholder="Confirm password "
                value={registerform.confirmpassword}
                onChange={e =>
                  this.handleChange({
                    key: "confirmpassword",
                    value: e.target.value
                  })
                }
              />
            </FormGroup>
            <Button
              id="button"
              style={{ marginleft: "10%" }}
              onClick={this.registeruser}
            >
              Register
            </Button>
          </Form>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  registerform: state.loginreducer.registerform
});

export default connect(mapStateToProps)(Register);
