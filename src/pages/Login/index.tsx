import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Button,
  Title,
  HeaderContainer,
  SubTitle,
  SubTitleMobile,
  Form,
  FormFooter,
  Input,
  FooterText,
  ButtonBackground,
  ButtonBackgroundBorder,
} from './styles';
import {LogoIntro} from './LogoIntro';
import {icons} from '../../assets/images';
import {Background} from '../../components';
import {Text, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Logo = icons.logo_icon;

const Login: React.FC = () => {
  const {navigate} = useNavigation();

  // return <LogoIntro />;

  return (
    <Background>
      <HeaderContainer>
        <Logo height={64} width={82} />
        <Text>
          <SubTitle>Han'sei</SubTitle>
          <SubTitleMobile>mobile bank</SubTitleMobile>
        </Text>
        <Title>Let's sign in you!</Title>
      </HeaderContainer>
      <Container>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <FormFooter>
            <FooterText>Remember-me</FooterText>
            <FooterText>ForgotPassword</FooterText>
          </FormFooter>
        </Form>

        <Button onPress={() => navigate('Home')}>
          <ButtonBackgroundBorder colors={['#00c6e9', '#000000', '#b517e8']}>
            <ButtonBackground colors={['#00c6e9', '#000000', '#b517e8']}>
              <Title>Go to home page</Title>
            </ButtonBackground>
          </ButtonBackgroundBorder>
        </Button>
        <FooterText>Don't have an account sign up</FooterText>
      </Container>
    </Background>
  );
};

export default Login;
