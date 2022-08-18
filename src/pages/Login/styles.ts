import {View, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin-top: 100px;
`;

export const Button = styled.Pressable`
  width: 267px;
  height: 44px;

  justify-content: center;
  align-items: center;
`;

export const ButtonBackgroundBorder = styled(LinearGradient)`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;
export const ButtonBackground = styled(LinearGradient)`
  height: 95%;
  width: 95%;
  border-radius: 40px;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  color: white;
`;

export const HeaderContainer = styled.View`
  height: 200;
  align-items: center;
  justify-content: center;
  padding-top: 76px;
`;

export const SubTitle = styled.Text`
  font-weight: 200;
  font-size: 14px;
  line-height: 17px;
`;
export const SubTitleMobile = styled.Text`
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
`;

export const Input = styled.TextInput`
  color: white;
`;

export const Form = styled.View`
  width: 90%;
`;
export const FormFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 276px;
`;

export const FooterText = styled.Text`
  color: white;
`;
