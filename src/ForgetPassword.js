import React from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

class ForgetPassword extends React.Component{

    setnewpassword = () => {
      const {initialform} = this.props;
      delete initialform.confirmpassword
      axios.post('http://localhost:8083/forgotpassword', initialform).then(res => {
        console.log(res, 'res')
      })
        // this.props.router.push('/')
    }

    handleChange = obj => {
      this.props.dispatch({type: 'FORGOT_PASSWORD', payload:obj})
    }
    render(){
      const {initialform} = this.props;
        return(
            <div style={{ width: "30%", "margin-left": "30%", 'margin-top': '15%' }}>
               <Form>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              value={initialform.email}
              onChange = {e => this.handleChange({key:'email', value: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">New Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Password "
              value={initialform.password}
              onChange = {e => this.handleChange({key:'password', value: e.target.value})}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Confirm Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Confirm Password "
              value={initialform.confirmpassword}
              onChange = {e => this.handleChange({key:'confirmpassword', value: e.target.value})}
            />
          </FormGroup>
          <div style={{'marginLeft': '30%', 'padding': '9px 40px'}}>
          <Button id="button" onClick = {this.setnewpassword}>Reset Password</Button>
          </div>
         
        </Form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
  initialform: state.loginreducer.initialform
})

export default connect(mapStateToProps)(ForgetPassword);