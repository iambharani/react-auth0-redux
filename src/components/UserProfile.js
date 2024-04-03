import React from "react";
import { useSelector } from "react-redux";
import { Card, Image, Container, Header } from "semantic-ui-react";
const UserProfile = () => {
  const user = useSelector(state => state.auth.user);
  
  return user ? (
    <Container text textAlign="center" style={{ marginTop: "20px" }}>
      <Card centered style={{ width: "80%" }}>
        <Image
          src="https://via.placeholder.com/150"
          wrapped
          ui={false}
          className="card-image"
        />
        <Card.Content>
          <Card.Header>Welcome, {user.name}!</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2021</span>
          </Card.Meta>
          <Card.Description>Email: {user.email}</Card.Description>
        </Card.Content>
      </Card>
    </Container>
  ) : (
    <Container text textAlign="center" style={{ marginTop: "20px" }}>
      <Header as="h2">Please log in</Header>
    </Container>
  );
};

export default UserProfile;
