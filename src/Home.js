import React from "react";
import { Link } from "react-router";
import {connect} from "react-redux"
import axios from 'axios'

import { Col, Row, Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

class Home extends React.Component {

    gotoregister = () => {
        this.props.router.push('/register')
    }
     
    submitlogin = () => {
      const {form} = this.props;
     axios.post('http://localhost:8083/login', form).then(res => {
       console.log(res, 'res')
       if(!res.data.error){
        localStorage.setItem('token', res.data.token)
        this.props.router.push('/welcome')
       } else{
         console.log('inelse')
         alert(res.data.message)
       }
      
     })
    }
    handleChange = (obj) => {
      this.props.dispatch({type: 'CHANGE_FIELDS', payload: obj})
    }
  render() {
    const {form} = this.props;
    return (
      <div style={{ width: "30%", "margin-left": "30%", 'margin-top': '15%' }}>
          <div style={{'marginLeft': '81%'}} >
          <Button id="button"  onClick={this.gotoregister}>Sign Up</Button>
          </div>
          
          <Card>
        <Form>

        <fieldset>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              value ={form.email}
              onChange={e => this.handleChange({key: 'email' , value: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password "
              value = {form.password}
              onChange={e => this.handleChange({key: 'password' , value: e.target.value})}
            />
          </FormGroup>
          <Link to="/forgetpassword">Forgot Password</Link>
          <div style={{'marginLeft': '30%', 'padding': '9px 40px'}}>
          <Button id="button" onClick={this.submitlogin}>Login</Button>
          </div>
         
      </fieldset>
        </Form>
        </Card>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  form : state.loginreducer.form
})
 

export default connect(mapStateToProps)(Home);
