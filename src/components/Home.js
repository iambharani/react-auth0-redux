import React from 'react';
import { Container, Header, Segment, Card, Image } from 'semantic-ui-react';


const Home = () => {
    const dummyData = [
      { title: 'Card 1', description: 'This is a description for card 1.' },
      { title: 'Card 2', description: 'This is a description for card 2.' },
      { title: 'Card 3', description: 'This is a description for card 3.' },
    ];
  
    return (
      <Container text textAlign='center'>
        <Segment padded='very' inverted color='blue'>
          <Header as='h2'>Welcome to MyApp</Header>
          <p>This is a application demonstrating React with Auth0 authentication.</p>
        </Segment>
  
        <Header as='h3' style={{ marginTop: '2em' }}>Featured Content</Header>
        <Card.Group doubling itemsPerRow={3}>
          {dummyData.map((item, index) => (
            <Card key={index}>
              <Image src='https://via.placeholder.com/150' wrapped />
              <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Description>{item.description}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
    );
  };
  
  export default Home;
  