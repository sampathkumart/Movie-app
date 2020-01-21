import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: null };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <React.Fragment>
        <div className="navbar">
          <Menu fixed="top" inverted>
            <Menu.Item
              name="Movies"
              icon="play circle"
              active={activeItem === "movies"}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Rating"
              icon="star"
              active={activeItem === "Rating"}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                name="SignIn"
                icon="mail"
                active={activeItem === "signin"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="SignUp"
                icon="mail outline"
                active={activeItem === "signUp"}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </div>
      </React.Fragment>
    );
  }
}
