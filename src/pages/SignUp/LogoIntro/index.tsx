import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg from 'react-native-svg';
import {icons} from '../../../assets/images';
import {Background} from '../../../components';
import {Container} from './styles';

const Logo = icons.logo_icon;

export const LogoIntro = () => {
  return (
    <Background>
      <Logo height={82} width={105} />
    </Background>
  );
};
