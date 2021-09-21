import React from 'react'
import { Card, Segment } from 'semantic-ui-react';
import '../stylesheets/Home.css'

const Home = () => {
    return (
        <div className="home-wrapper">
            <Segment className="title">
                <h1>Context-assignment app</h1>
            </Segment>
            <Card.Group className="group-wrapper">
                <Card className="tom-card">
                    <Card.Content>
                        <Card.Header>
                            Full Control
                        </Card.Header>
                        <Card.Description>Experience the joys of being able to update a user</Card.Description>
                    </Card.Content>
                </Card>
                <Card className="tom-card">
                    <Card.Content>
                        <Card.Header>
                            Depth
                        </Card.Header>
                        <Card.Description>Immerse yourself in the layers of control as you edit and view a user</Card.Description>
                    </Card.Content>
                </Card>
                <Card className="tom-card">
                    <Card.Content>
                        <Card.Header>
                            Responsive Design
                        </Card.Header>
                        <Card.Description>Feel confident that making a change will bring you your results, fast.</Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}

export default Home;