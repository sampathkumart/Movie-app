import React, { Component } from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { Link } from 'react-router-dom';

class LoginForm extends Component {
  render() {
    return(
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        Welcome To SignIn
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            autoFocus
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            SignIn
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

      
  }
}
 
export default LoginForm;
