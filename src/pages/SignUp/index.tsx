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
import {Pressable, Text, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Logo = icons.logo_icon;

const SignUp: React.FC = () => {
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
        <Title>Create an account</Title>
      </HeaderContainer>
      <Container>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Comfirm password" />
        </Form>

        <Button onPress={() => navigate('Home')}>
          <ButtonBackgroundBorder colors={['#00c6e9', '#000000', '#b517e8']}>
            <ButtonBackground colors={['#00c6e9', '#000000', '#b517e8']}>
              <Title>Register</Title>
            </ButtonBackground>
          </ButtonBackgroundBorder>
        </Button>
        <Pressable onPress={() => navigate('Home')}>
          <FooterText>Already have an account? sign in</FooterText>
        </Pressable>
      </Container>
    </Background>
  );
};

export default SignUp;
