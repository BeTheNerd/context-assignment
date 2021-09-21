import React, { useContext, useState } from "react";
import { Form, } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const UserForm  = () => {
  const { firstName, lastName, email, updateUser} = useContext(UserContext)

  const [formFirstName, setFormFirstName] = useState(firstName);
  const [formLastName, setFormLastName] = useState(lastName);
  const [formEmail, setFormEmail] = useState(email);
  // state = { username: "", membershipLevel: "", };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({firstName: formFirstName, lastName: formLastName, email: formEmail})
  }
  
    return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Input 
         label="First Name"
          type="text"
          name="username"
          value={formFirstName}
          onChange={(e) => setFormFirstName(e.target.value)}
        />
        <Form.Input 
          label="Last Name"
          type="text"
          name="username"
          value={formLastName}
          onChange={(e) => setFormLastName(e.target.value)}
        />
        <Form.Input
          label="Email"
          type="text"
          name="username"
          value={formEmail}
          onChange={(e) => setFormEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Button color="green">Save</Form.Button>
      </Form>
    );
  
};



export default UserForm;