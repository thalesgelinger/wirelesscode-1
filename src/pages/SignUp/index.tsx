import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, Button, Title } from './styles';

const SignUp: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigate('Home')}>  
        <Title>Go to home page</Title>
      </Button>
    </Container>
  )
}

export default SignUp;