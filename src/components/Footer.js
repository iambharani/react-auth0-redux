import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: '1em 0em', marginTop: 'auto' }}>
      <Container textAlign='center'>
        © 2024 MyApp, Inc.
      </Container>
    </Segment>
  );
};

export default Footer;
