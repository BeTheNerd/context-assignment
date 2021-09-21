import React, { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider";

const User = () => {
  const { firstName, lastName, email, avatar} = useContext(UserContext)
  return (
    <Card>
      <Image src={avatar} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>{firstName}</Card.Header>
        <Card.Header>{lastName}</Card.Header>
        <Card.Meta>
          {email}
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        
      </Card.Content>
    </Card>
    )
}

export default User;