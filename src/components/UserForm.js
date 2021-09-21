import React from "react";
import { Form, } from "semantic-ui-react";

class UserForm extends React.Component {
  state = { username: "", membershipLevel: "", };
  
  handleChange = (e, { name, value }) => this.setState({ [name]: value, });
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  render() {
    const { username, membershipLevel, } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="New Username"
          type="text"
          name="username"
          value={username}
          onChange={this.handleChange}
        />
        <Form.Button color="blue">Save</Form.Button>
      </Form>
    )
  }
}



export default UserForm;