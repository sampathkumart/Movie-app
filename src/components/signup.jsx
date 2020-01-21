import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";

const LoginForm = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Form size="large">
        <Segment stacked>
          <Header as="h2" color="teal" textAlign="center">
            Create Your Account
          </Header>
          <Form.Input
            autoFocus
            fluid
            icon="address book"
            iconPosition="left"
            placeholder="Firstname"
          />
          <Form.Input
            fluid
            icon="address book  "
            iconPosition="left"
            placeholder="Lastname"
          />
          <Form.Input
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
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Confirm password"
            type="password"
          />
          <Button color="teal" fluid size="large">
            SignUp
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
);

export default LoginForm;
