import React, { useState } from "react";
import { Form, } from "semantic-ui-react";

const UserForm  = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // state = { username: "", membershipLevel: "", };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
    return (
    <Form>
      <Form.Group onSubmit={handleSubmit}>
        <Form.Input 
         label="First Name"
          type="text"
          name="username"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Form.Input 
          label="Last Name"
          type="text"
          name="username"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Form.Input
          label="Email"
          type="text"
          name="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Button color="green">Save</Form.Button>
      </Form>
    );
  
};



export default UserForm;